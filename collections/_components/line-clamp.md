---
layout: docs
title: Line Clamp
description: Line clamp component to create expandable html sections
---

# Line Clamp

* TOC
{:toc}

## About

Line Clamp --- is a js component to create expandable ("Show more...") sections
with html content.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/line-clamp.js){:target="_blank" rel="noopener"}

## Initialization

Use the following wrapper around your html content:

```html
<div class="line-clamp-1" data-mage-init='{"lineClamp":{}}'>
    ...
</div>
```

Line clamps from `line-clamp-1` to `line-clamp-6` are supported.

## JS Usage

If you already have a wrapper around the content but you can't modify it
you can use js and css code:

```js
$(document).on('breeze:load', () => {
    $('.selector').lineClamp();
});
```
{:.chained}

```scss
.selector {
    &:extend(.line-clamp-3);
}
```
