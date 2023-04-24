---
layout: docs
title: Gallery
description: Gallery
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
        <var name="allowfullscreen">true</var>
        <var name="keyboard">true</var>
        <var name="loop">true</var>
        <var name="nav">true</var> <!-- true/false -->
        <var name="navdir">horizontal</var> <!-- horizontal/vertical -->
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
@bz-gallery-thumb__wrap: false;
@bz-gallery-thumb__gap: 5px;
@bz-gallery-thumb__margin: 5px 0 0;
@bz-gallery-vertical-thumb__margin: 0 5px 0 0;
@bz-gallery-vertical-thumb__max-height: 550px;
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
