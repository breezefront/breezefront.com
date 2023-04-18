---
layout: docs
title: Range Slider
description: Range Slider
---

# Range Slider

* TOC
{:toc}

## About

Range Slider --- is a html/js component used by third-party modules to create
layered navigation price and other range filters.

[View Source Code](https://github.com/swissup/range-slider){:target="_blank" rel="noopener"}

## Initialization

Use the following markup in your template:

```html
<range-slider name="price" min="0" max="100" value="10-90" step="10">
    <input class="range" type="range" min="0" max="100" value="10" step="10"/>
    <input class="range" type="range" min="0" max="100" value="90" step="10"/>
    <input class="filler" disabled type="range"/>
</range-slider>
```

## JS Usage

```js
const range = document.querySelector('range-slider');

range.value = [30, 40];

range.addEventListener('range:input', function (event) {
    console.log(event.target.value);
});
```

## Styles

```scss
range-slider {
    --thumb-width: 16px;
    --thumb-height: var(--thumb-width);
    --thumb-mobile-scale: 1.4;
    --thumb-mobile-width: calc(var(--thumb-width) * var(--thumb-mobile-scale));
    --thumb-mobile-height: calc(var(--thumb-height) * var(--thumb-mobile-scale));
    --thumb-border: 1px solid #fff;
    --thumb-border-radius: 999px;
    --thumb-bg: 10 89 254;
    --thumb-mobile-scale: 1.4;
    --track-height: 4px;
    --track-border-radius: var(--thumb-border-radius);
    --track-bg: 234 234 234;
}
```
