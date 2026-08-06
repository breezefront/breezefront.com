---
layout: docs
title: Zoom on Hover
description: Zoom on hover animation
---

# Zoom on Hover

* TOC
{:toc}

## About

Zoom on hover adds nice zoom effect for all elements with `hover-zoom` css
class.

Source Code:

 - [CSS helper](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/layout/_animations.less){:target="_blank" rel="noopener"}
 - [LESS mixin](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/mixins/_animation.less#L17-L41){:target="_blank" rel="noopener"}
 - [LESS variables](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/variables/_animation.less){:target="_blank" rel="noopener"}

## Product listing

To enable zoom on hover for product items, use the following code:

```scss
@listing-grid-item__zoom-on-hover: true;
```

## CSS helper

Usage example:

```html
<a href="..." class="rounded-sm hover-zoom"><img src="..."/></a>
```

You can also add `hover-zoom` class for pagebuilder Slide and Banner elements
with background image and zoom will work for its background too!

## LESS mixin

```scss
.selector {
    overflow: hidden;
    .zoom-on-hover();
}
```

## LESS variables

```scss
@zoom-on-hover__transition: transform 600ms cubic-bezier(0.35, 0, 0.05, 1);
@zoom-on-hover__transform: scale(1.05);
```
