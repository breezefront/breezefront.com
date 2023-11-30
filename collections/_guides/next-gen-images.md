---
layout: docs
title: Next-Gen Images
description: How to configure webp images in Breeze theme.
order: 310
---

# Next-Gen Images

* TOC
{:toc}

## About

This guide will show you how to configure image resizing and optimization using
Nginx.

> Looking for simpler solutions? Try one of these:
>   - [Pagespeed module](https://swissuplabs.com/page-speed-magento-2.html){:target="_blank" rel="noopener"}
>     --- resize the images using your server.
>   - [Wsrv module](https://github.com/swissup/module-wsrv/){:target="_blank" rel="noopener"}
>     --- resize the images using free [wsrv.nl](https://wsrv.nl/) service.
>   - [Cloudflare service](https://developers.cloudflare.com/images/){:target="_blank" rel="noopener"}

![Network requests](/assets/img/next-gen-images/network.webp){:width="655" height="189" class="ring-1 ring-gray-300 rounded-md overflow-hidden mx-auto"}

## Change image resizing mode

Change _Configuration > General > Web > Url Options > Catalog media URL format_
option from `hash` to `image_optimization_parameters`:

```powershell
bin/magento config:set web/url/catalog_media_url_format image_optimization_parameters && \
bin/magento cache:clean
```

Check the frontend now. All images should use the new format for their URLs:
`example.com/media/catalog/image.jpg?width=300&height=300..`

However, images are not resized at this point. We need to configure the Nginx server.

## Configure Nginx

Open your Magento nginx settings file (Usually, it's a `magento_root/nginx.conf.sample` file)
and apply the following changes:

```diff
location /media/ {
+   location ~* ^/media/catalog/.* {
+       proxy_pass http://$resize_stream;
+       proxy_cache images;
+       proxy_cache_valid 200 24h;
+   }

```

Now, let's create a stream that will serve webp images if possible. Otherwise,
fallback to the original image will be used.

Open nginx settings file with Magento server declaration (In my case it's a
`/etc/nginx/sites-enabled/magento.conf`) and add the following lines:

```nginx
# create cache for resized images
proxy_cache_path /tmp/nginx-magento2-cache/
    levels=1:2
    keys_zone=images:10m
    inactive=24h
    max_size=500m;

# declare resize streams for legacy and new browsers
map $http_accept $resize_stream {
    default legacy;
    ~image/webp webp;
}
upstream webp {
    server localhost:22222;
}
upstream legacy {
    server localhost:33333;
}

# server for modern browsers
server {
    server_name localhost;
    listen 22222;
    set $MAGE_ROOT /www/magento2;
    root $MAGE_ROOT/pub;

    location ~* ^/(?<path>media/catalog/.*)$ {
        set $ext "";

        # when request is made for image.jpg,
        # check if image.jpg.webp is available.
        if (-f $MAGE_ROOT/pub/$path.webp) {
            set $ext .webp;
        }

        alias $MAGE_ROOT/pub/$path$ext;

        set $width "-";
        set $height "-";
        if ($arg_width != '') {
            set $width $arg_width;
        }
        # comment the section below to resize by width only
        if ($arg_height != '') {
            set $height $arg_height;
        }
        image_filter resize $width $height;
        image_filter_interlace on;
        image_filter_jpeg_quality 75;
        image_filter_webp_quality 75;
    }
}

# server for legacy browsers
server {
    server_name localhost;
    listen 33333;
    root /www/magento2/pub;

    location / {
        set $width "-";
        set $height "-";
        if ($arg_width != '') {
            set $width $arg_width;
        }
        # comment the section below to resize by width only
        if ($arg_height != '') {
            set $height $arg_height;
        }
        image_filter resize $width $height;
        image_filter_interlace on;
        image_filter_jpeg_quality 75;
        image_filter_webp_quality 75;
    }
}
```

Run `nginx -t` to check if everything is configured properly and restart server.

**Warning!** This configuration allows to pass any dimensions in `width|height`
parameters. We recommend updating config according to your view.xml file:

```nginx
if ($arg_width ~ "290|325|350|380|480|525|575|650|512|960") {
    set $width $arg_width;
}
# comment the section below to resize by width only
if ($arg_height ~ "290|325|350|380|480|525|575|650|512|960") {
    set $height $arg_height;
}
```

## Convert images to WEBP

Let's run a command to create a webp image near every existing image in
`media/catalog/product` folder if it's not exists already.

> This command requires to install `cwebp` utility: `sudo apt install cwebp`

```bash
find ./pub/media/catalog/product/ -type d -name cache -prune \
  -o \( -type f -name '*.jpg' -o -type f -name '*.png' \) -print0 \
    | xargs -0 -P $(nproc) -I {} sh -c \
      'test ! -f $1.webp && echo $1.webp && cwebp -quiet -q 80 $1 -o $1.webp' _ {} \;
```

That's all. Check your frontend now!
