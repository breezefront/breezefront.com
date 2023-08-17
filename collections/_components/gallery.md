---
layout: docs
title: Gallery
description: Product page gallery
---

# Gallery

* TOC
{:toc}

## About

Gallery --- is media component used to display images and videos at the
product page. It allows to show thumbnails in in horizontal or vertical modes,
enable magnifier, and fullscreen mode.

Source code:

 - [gallery.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/gallery.js){:target="_blank" rel="noopener"}
 - [gallery-magnifier.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/gallery-magnifier.js){:target="_blank" rel="noopener"}
 - [gallery-panzoom.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/gallery-panzoom.js){:target="_blank" rel="noopener"}
 - [view.xml](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/etc/view.xml#L242-L266){:target="_blank" rel="noopener"}

## Options

You can configure gallery options using `view.xml` file in your theme:

```xml
<vars module="Magento_Catalog">
    <var name="gallery">
        <var name="mode">default</var> <!-- default/expanded -->
        <var name="allowfullscreen">true</var>
        <var name="keyboard">true</var>
        <var name="loop">true</var>
        <var name="nav">thumbs</var> <!-- false/thumbs/dots -->
        <var name="navdir">horizontal</var> <!-- horizontal/vertical -->
        <var name="caption">false</var> <!-- true/false -->
    </var>
    <var name="magnifier">
        <var name="enabled">false</var> <!-- true/false -->
        <var name="mode">auto</var> <!-- auto(stage with fallback to lens)/stage/lens -->
        <var name="zoom">auto</var> <!-- auto or number. When using number, consider changing upscale option. -->
        <var name="zoomMin">1.6</var> <!-- min zoom to use, otherwise - disable magnifier. -->
        <var name="zoomMax">2.5</var> <!-- max zoom to use, otherwise - downscale the image. -->
        <var name="upscale">1.5</var> <!-- max upscale to satisfy zoomMin. -->
        <var name="stage">
            <var name="position">right</var> <!-- left/right/inner -->
            <var name="width">100w</var> <!-- number or percent of width/height -->
            <var name="height">100h</var> <!-- number or percent of width/height -->
        </var>
        <var name="lens">
            <var name="shape">circle</var> <!-- rectangle/circle -->
            <var name="width">180</var> <!-- number -->
            <var name="height">180</var> <!-- number -->
        </var>
    </var>
</vars>
```

## Methods

```js
var gallery = $(el).gallery('instance');

gallery.next();
gallery.prev();
gallery.activate(index);
gallery.open();
gallery.close();
```

## Events

Here is a list of event listeners for gallery events:

```js
$(document).on('gallery:loaded', (e, data) => {});
$(document).on('gallery:beforeActivate', (e, data) => {});
$(document).on('gallery:afterActivate', (e, data) => {});
$(document).on('gallery:beforeOpen', (e, data) => {});
$(document).on('gallery:afterOpen', (e, data) => {});
$(document).on('gallery:beforeClose', (e, data) => {});
$(document).on('gallery:afterClose', (e, data) => {});
```

Each listener receives `event` and `data` objects. Data object has `instance`
property that refers to gallery widget that triggered the event.

## Styles

```scss
@bz-gallery-expanded__gap: 10px; // 0px|10px
@bz-gallery-expanded__columns-count: 2;

@bz-gallery-thumb__wrap: false;
@bz-gallery-thumb__gap: 5px;
@bz-gallery-thumb__margin: 5px 0 0;
@bz-gallery-vertical-thumb__margin: 0 5px 0 0;
@bz-gallery-vertical-thumb__max-height: 550px;

@bz-gallery-dots-thumb__gap: 10px;
@bz-gallery-dots-thumb__margin: 16px 0 0;
@bz-gallery-dots-thumb__width: 12px;
@bz-gallery-dots-thumb__height: @bz-gallery-dots-thumb__width;
@bz-gallery-dots-thumb__border-radius: 9999px;
@bz-gallery-dots-thumb__background: #e6e6e6;
```

It's worth to note that vertical mode is enabled
[for large screens only](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/css/source/components/_gallery.less#L295-L297){:target="_blank" rel="noopener"}.
If you whould like to enable vertical mode on smaller devices you should use
custom styles for that:

```scss
& when (@critical) {
    .breeze-gallery.vertical:not(.opened) {
        .bz-gallery-vertical();
    }
}
```

## Examples

### Expanded gallery mode

Add the following values to the `etc/view.xml` file in your theme:

```xml
<vars module="Magento_Catalog">
    <var name="gallery">
        <var name="mode">expanded</var>
    </var>
</vars>
```

You'll also want to increase width of product-media container. We recommend using
less variables:

```scss
@product-wrapper__md__gap: @4;
@product-wrapper__md__grid-columns: 7fr 4fr;
@product-wrapper__lg__gap: @6;
@product-wrapper__lg__grid-columns: 3fr 1fr;
```

Finally, you need to change medium image size to match updated theme config.
Update corresponding values in the `etc/view.xml` file in your theme.

Here is proper values for the BreezeEvolution theme:

```xml
<media>
    <images module="Magento_Catalog">
        <image id="product_page_image_medium" type="image">
            <width>465</width>
            <height>581</height>
        </image>
        <image id="product_page_image_medium-srcset-1" type="image">
            <width>465</width>
            <height>581</height>
        </image>
        <image id="product_page_image_medium-srcset-2" type="image">
            <width>738</width>
            <height>922</height>
        </image>
        <image id="product_page_image_medium-srcset-3" type="image">
            <width>800</width>
            <height>1000</height>
        </image>
        <image id="product_page_image_medium-srcset-4" type="image">
            <width>930</width>
            <height>1162</height>
        </image>
        <image id="product_page_image_medium-srcset-5" type="image">
            <width>930</width>
            <height>1162</height>
        </image>
    </images>
</media>
<vars module="Swissup_Breeze">
    <var name="sizes">
        <var name="product_page_image_medium"><![CDATA[
            (min-width: 1536px) 465px,
            (min-width: 1280px) calc((85vw - 2.5rem - 10px) * (3 / 4) / 2),
            (min-width: 768px) calc((100vw - 2rem - 10px) * (7 / 11) / 2),
            calc(100vw - 1rem)
        ]]></var>
    </var>
</vars>
```

Save the files and clear Magento cache.

### Inner zoom magnifier

Add the following values to the `etc/view.xml` file in your theme to enable
magnifier with inner zoom option:

```xml
<vars module="Magento_Catalog">
    <var name="magnifier">
        <var name="enabled">true</var>
        <var name="stage">
            <var name="position">inner</var>
        </var>
    </var>
</vars>
```

Save the file and clear Magento cache.
