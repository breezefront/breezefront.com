---
layout: docs
title: Slider
description: Scrollable carousel with pagination and arrows
---

# Slider

* TOC
{:toc}

## About

Slider or Carousel --- is a [widget component](widgets) to show a number of
elements in a scrollable carousel view.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/pagebuilder/slider.js){:target="_blank" rel="noopener"}

## Initialization

Static HTML initialization:

```html
{% raw %}<div data-content-type="slider" data-mage-init='{"Magento_PageBuilder/js/content-type/slider/appearance/default/widget":{"arrows":true,"dots":true}}'>
  <div class="slick-list" style="gap:15px">
    <div><img width="180" height="100" src="{{media url=image1.png}}"/></div>
    <!-- ... -->
    <div><img width="180" height="100" src="{{media url=image8.png}}"/></div>
  </div>
</div>{% endraw %}
```

JS initialization:

```js
$('.selector').pagebuilderSlider();
```

## Options

Here is a list of slider options:

```js
$(el).pagebuilderSlider({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: false,
    arrows: true,
    dots: false
});
```

## Methods

```js
var slider = $(el).pagebuilderSlider('instance');

slider.start();
slider.stop();
slider.pause();
slider.next();
slider.prev();
slider.scrollToPage(2);
slider.addSlide(3, '<html code>');
slider.removeSlide(1);
```
