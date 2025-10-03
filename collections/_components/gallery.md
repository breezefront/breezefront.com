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
 - [gallery-slider.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/gallery-slider.js){:target="_blank" rel="noopener"}
 - [view.xml](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/etc/view.xml#L242-L266){:target="_blank" rel="noopener"}

## Options

You can configure gallery options using `view.xml` file in your theme:

```xml
<vars module="Magento_Catalog">
    <var name="gallery">
        <var name="mode">default</var> <!-- default/expanded/slider -->
        <var name="allowfullscreen">true</var>
        <var name="keyboard">true</var>
        <var name="loop">true</var>
        <var name="nav">thumbs</var> <!-- hidden/thumbs/dots -->
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

This is the popular choice for many fashion stores. All images are visible
and you can scroll down the page to see each one.

<details><summary>View Screenshot</summary>
    <img src="{{ '/assets/img/components/gallery-expanded.webp' | relative_url }}" width="1023" height="682" class="!m-0" alt="Expanded Mode Screenshot" loading="lazy"/>
</details>

To enable this mode add the following values to the `etc/view.xml` file in your theme:

```xml
<vars module="Magento_Catalog">
    <var name="gallery">
        <var name="mode">expanded</var>
    </var>
</vars>
```

### Slider gallery mode

This mode is similar to the default one, except swype and drag gestures are
fully supported with proper slide animation. This is a default mode for the
Breeze Evolution theme.

<details><summary>View Video</summary>
    <video loop controls class="cursor-pointer" src="{{ '/assets/img/components/gallery-slider.webm' | relative_url }}" class="!m-0"></video>
</details>

To enable this mode add the following values to the `etc/view.xml` file in your theme:

```xml
<vars module="Magento_Catalog">
    <var name="gallery">
        <var name="mode">slider</var>
    </var>
</vars>
```

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

### Show thumbnails as dots

If you want to use `dots` mode for mobile devices only, instead of using
the `<var name="nav">dots</var>` xml you need to use `LESS` mixin in your theme:

```scss
& when (@critical) {
    @media @media-md-down {
        .breeze-gallery:not(.opened) .thumbnails {
            .bz-gallery-nav-dots();
        }
    }
}
```
