---
layout: docs
title: Spinner
description: Spinner to indicate the loading state
---

# Spinner

* TOC
{:toc}

## About

Spinner or Loader --- is a js component to show a spinning animation while some job
is being executed.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/block-loader.js){:target="_blank" rel="noopener"}

## Initialization

```js
$('.selector').spinner(true);
```

## Options

Here is a list of spinner options:

```js
$(el).spinner(true, {
    delay: 200, // do not show for first 200ms.
    css: {
        width: '20px',
        height: '20px',
        background: 'transparent'
    }
});
```

## Methods

```js
$(el).spinner(true); // show spinner
$(el).spinner(false); // hide spinner
```

## Styles

```scss
@theme__brand-color: @blue-600;
@spinner__size: @6;
@spinner__border-width: 2px;
@spinner__border-color: var(--brand-color);
@spinner__animation-duration: .6s;
```
