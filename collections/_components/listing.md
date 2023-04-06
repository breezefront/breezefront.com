---
layout: docs
title: Listing
description: Product listing customization in Breeze-based themes
---

# Listing

* TOC
{:toc}

## About

Product listing --- is one of the main parts of every store. Breeze provides
a lot of customization options for listing out of the box.

## LESS variables

### List mode

```scss
@listing-list__gap: @3;
@listing-list__divider: 1px solid @divider__color;
@listing-list-item__gap: @3;
@listing-list-image__width: 28%;
@listing-list-image__sidebar__width: 35%;
```

### Grid mode

```scss
@listing-grid__gap: @4;
@listing-grid__row-gap: @listing-grid__gap;
@listing-grid__columns: 2;

@listing-grid__media-sm__columns: 3;
@listing-grid__media-md__columns: false;
@listing-grid__media-lg__columns: 4;
@listing-grid__media-xl__columns: false;

@listing-grid__media-md-1column__columns: 4;
@listing-grid__media-lg-1column__columns: 5;
@listing-grid__media-xl-1column__columns: false;

@listing-grid__media-lg-3columns__columns: 3;
@listing-grid__media-xl-3columns__columns: false;
```

### Card styles

```scss
@listing-grid-item__price-aside-name: false;

@listing-grid-item__align-items: false;
@listing-grid-item__max-width: 400px;
@listing-grid-item__padding: 0px;
@listing-grid-item__margin: -@listing-grid-item__padding;
@listing-grid-item__border-radius: @product-image__border-radius;
@listing-grid-item__box-shadow: false;
@listing-grid-item__background: false;
@listing-grid-item__hover__box-shadow: false;
@listing-grid-item__hover__background: @base__background;
@listing-grid-item__hover__padding: @listing-grid-item__padding;
@listing-grid-item__hover__margin: -@listing-grid-item__hover__padding;

@listing-grid-item-swatches__position: static;
@listing-grid-item-swatches__z-index: 1;
```

### Product name

```scss
@listing-item-name__color: false;
@listing-item-name__font-weight: false;
@listing-item-name__font-size: false;

@listing-grid-item-name__line-clamp: false;
@listing-grid-item-name__hover__line-clamp: 7;
```

### Primary actions

```scss
@listing-grid-item-actions__gap: @1;

@listing-grid-item-actions-primary__position: static; // static|absolute

// When using absolute position for the primary actions
// Breeze will hide them on touch devices. To prevent this
// behavior, use static position for the next line:
@listing-grid-item-actions-primary__hover-none__position: false; // static|false

@listing-grid-item-actions-primary__absolute__opacity: 0;
@listing-grid-item-actions-primary__absolute__z-index: 5;
@listing-grid-item-actions-primary__absolute__top: 33%;
@listing-grid-item-actions-primary__absolute__centered-x: true;
@listing-grid-item-actions-primary__absolute__left: false; // used when centered-x is false
@listing-grid-item-actions-primary__absolute__right: false; // used when centered-x is false
@listing-grid-item-actions-primary__absolute__transform: translateX(-50%) translateY(40%);
@listing-grid-item-actions-primary__absolute__visible__transform: translateX(-50%);

@listing-grid-item-tocart__absolute__text-color: false;
@listing-grid-item-tocart__absolute__background-alpha: false;
@listing-grid-item-tocart__absolute__background-color: false;
@listing-grid-item-tocart__absolute__border-color: false;
@listing-grid-item-tocart__absolute__hover__background-alpha: false;
@listing-grid-item-tocart__absolute__box-shadow: false;
@listing-grid-item-tocart__absolute__font-weight: false;
@listing-grid-item-tocart__absolute__font-size: false;
@listing-grid-item-tocart__absolute__letter-spacing: false;
@listing-grid-item-tocart__absolute__text-transform: false;
```

### Secondary actions

```scss
@listing-item-actions-secondary__display: flex;
@listing-item-actions-secondary__gap: @0-5;
@listing-item-actions-secondary-link__color: @muted__color;
@listing-item-actions-secondary-link__background: transparent;
@listing-item-actions-secondary-link__padding: 0px;
@listing-item-actions-secondary-link__border: false;
@listing-item-actions-secondary-link__border-radius: @button__border-radius;
@listing-item-actions-secondary-icon__width: @8;
@listing-item-actions-secondary-icon__height: @8;
@listing-item-actions-secondary-icon__size: @6;

@listing-grid-item-actions-secondary__position: static; // static|absolute
@listing-grid-item-actions-secondary__absolute__flex-direction: column;
@listing-grid-item-actions-secondary__absolute__opacity: 0;
@listing-grid-item-actions-secondary__absolute__z-index: @listing-grid-item-actions-primary__absolute__z-index;
@listing-grid-item-actions-secondary__absolute__top: @1;
@listing-grid-item-actions-secondary__absolute__left: false;
@listing-grid-item-actions-secondary__absolute__right: @1;
@listing-grid-item-actions-secondary__absolute__transform: false;
@listing-grid-item-actions-secondary__absolute__visible__transform: false;
@listing-grid-item-actions-secondary__absolute__mask-size: @5;
```

### Reveal on hover

```scss
@listing-grid-item__reveal-on-hover: false;
@listing-grid-item__reveal-on-hover__visible-height: 70px;
@listing-grid-item__reveal-on-hover__hover-none__visible-height: @listing-grid-item__reveal-on-hover__visible-height; // 70px|false
@listing-grid-item__reveal-on-hover__aspect-ratio: 236 / 296; // image-width / image-height
```

## Examples


### Card with shadow

```scss
@listing-grid__gap: @4;
@listing-grid-item__background: @base__background;
@listing-grid-item__box-shadow: @shadow-lg-around;
@listing-grid-item__padding: @3;
@listing-grid-item__margin: 0px;
@listing-grid-item__hover__margin: 0px;
```

### Card with hover effect

```scss
@listing-grid-item__reveal-on-hover: true;
@listing-grid-item__hover__padding: @3;
@listing-grid-item__hover__box-shadow: @shadow-lg-around;
```