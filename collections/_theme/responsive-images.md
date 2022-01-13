---
layout: default
title: Responsive Images
description: Using responsive images in Breeze Frontend
order: 500
---

# Responsive Images

* TOC
{:toc}

## About

[Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
feature allows to serve most suitable image size
for visitor's specific device: a phone, a laptop, or any other device.

Here is how image element should look like when responsive images option is enabled:

```html
<img src="image.png"
  srcset="image-230.png 230w, ..., image-600.png 600w"
  sizes="(min-width: 1536px) 300px, ..., calc(50vw - 2rem)"
/>
```

The image above declares a set of differenly sized images `srcset` and a rules `sizes`
to let browser know when to take which of the image.

> This feature is enabled and configured for Blank theme, but you will need to
> configure it when custom theme with custom image dimensions is used.

## Srcset settings

Srcset is generated based on `<images>` config in `<theme_dir>/etc/view.xml`
file. This config should describe an `image` entry for each of the possible image sizes.

An `id` of each additional size should use original image `id` suffixed with `-srcset-`
suffix:

```xml
<media>
  <images module="Magento_Catalog">
    <!-- Grid listing -->
    <image id="category_page_grid" type="small_image">
      <width>300</width>
      <height>375</height>
    </image>
    <image id="category_page_grid-srcset-230" type="small_image">
      <width>230</width>
      <height>287</height>
    </image>
    <!-- ... -->

    <!-- List listing -->
    <image id="category_page_list" type="small_image">
      <width>300</width>
      <height>375</height>
    </image>
    <image id="category_page_list-srcset-260" type="small_image">
      <width>260</width>
      <height>325</height>
    </image>
    <image id="category_page_list-srcset-600" type="small_image">
      <width>600</width>
      <height>750</height>
    </image>
  </images>
</media>
```

## Sizes settings

Sizes are taken from `Swissup_Breeze` config in `<theme_dir>/etc/view.xml`
file.

Config entry for each size should use image `id` as its name, optionally suffixed with
page layout name:

```xml
<vars module="Swissup_Breeze">
  <var name="sizes">
    <var name="category_page_grid">(min-width: 1536px) 300px, ..., calc(50vw - 2rem)</var>
    <var name="category_page_grid-1column">(min-width: 1536px) 285px, ..., calc(50vw - 2rem)</var>
    <var name="category_page_grid-cms-full-width">use:category_page_grid-1column</var>
    <var name="category_page_list">(min-width: 1280px) 300px, ..., 35vw</var>
    <var name="new_products_content_widget_grid">use:category_page_grid</var>
  </var>
</vars>
```

Additionally, sizes config node can refer to another sizes value. According to
the example above:

 -  Product images rendered on the `full-width` page will use `category_page_grid-1column`
    sizes option.
 -  Images in New Products Widget will use `category_page_grid` sizes (Including
    layout prefixed settings).

## Related guides

 - [Setup image dimensions](/image-dimensions)
