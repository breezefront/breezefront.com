---
layout: docs
title: Blocks
description: Sidebar and content blocks customization
---

# Blocks

* TOC
{:toc}

## About

Breeze has the following block types:

 - Sidebar blocks --- blocks from left/right columns
 - Content blocks --- blocks from main content section
 - Account blocks --- blocks from customer account pages
 - Hero blocks --- blocks at the homepage, product page, and page-bottom section
 - Homepage blocks
 - Boxed blocks --- blocks with applied `breeze-block-boxed` mixin. Usually, it's
    a block with main content, that should not take a lot of space. It has a limited
    width, may have a shodow or different background color. We use them actively
    on customer registration, contacts, forgot password pages.

All blocks inherit sidebar block styles. Additionally, each block type has its
own less variables.

## LESS mixins

Use mixins to apply block styles to any other elements.

### Available mixins

```scss
// Sidebar blocks
.breeze-block-sidebar-title();
.breeze-block-sidebar-content();

// Content blocks
.breeze-block-content-title();
.breeze-block-content-content();

// Homepage, product page, and page-bottom blocks
.breeze-block-hero-title();
.breeze-block-hero-content();

// Homepage blocks
.breeze-block-hero-cms-title();
.breeze-block-hero-cms-content();

// Boxed blocks
.breeze-block-boxed-title();
.breeze-block-boxed-content();
```

### Usage example

```scss
selector {
    title {
        &:extend(.breeze-block-sidebar-title all);
        &:extend(.breeze-block-hero-title all);
    }
    content {
        &:extend(.breeze-block-sidebar-content all);
        &:extend(.breeze-block-hero-content all);
    }
}
```

## LESS variables

### Sidebar blocks

```scss
@block__indent: @6;
@block-title__line-height: @7;
@block-title__font-family: false;
@block-title__font-size: @4-5;
@block-title__font-weight: 500;
@block-title__text-transform: false;
@block-title__padding: @2 0;
@block-title__margin: false;
@block-title__text-color: var(--base-color);
@block-title__background-color: false;
@block-title__border: false;
@block-title__border-width: false;
@block-content__padding: false;
@block-content__background-color: false;
@block-content__border: false;
@block-content__border-width: false;
```

### Content blocks

```scss
@content-block-title__line-height: false;
@content-block-title__font-family: false;
@content-block-title__font-size: false;
@content-block-title__font-weight: false;
@content-block-title__text-transform: false;
@content-block-title__padding: false;
@content-block-title__margin: false;
@content-block-title__color: false;
@content-block-title__background: false;
@content-block-title__border: false;
@content-block-title__border-width: false;
@content-block-content__padding: false;
@content-block-content__border: false;
@content-block-content__border-width: false;
```

### Account blocks

```scss
@account-block-title__line-height: @7;
@account-block-title__font-family: false;
@account-block-title__font-size: @4-5;
@account-block-title__font-weight: 500;
@account-block-title__text-transform: none;
@account-block-title__padding: @2 @4;
@account-block-title__margin: 0;
@account-block-title__color: false;
@account-block-title__background: ~"rgb(var(--muted-bg))";
@account-block-title__border: false;
@account-block-title__border-width: false;
@account-block-content__padding: @4;
@account-block-content__border: false;
@account-block-content__border-width: false;
```

### Hero blocks

```scss
@hero-block-title__text-align: false;
@hero-block-title__line-height: false;
@hero-block-title__font-family: false;
@hero-block-title__font-size: false;
@hero-block-title__font-weight: false;
@hero-block-title__text-transform: false;
@hero-block-title__padding: false;
@hero-block-title__margin: false;
@hero-block-title__color: false;
@hero-block-title__background: false;
@hero-block-title__border: false;
@hero-block-title__border-width: false;
@hero-block-title-icon__mask: false;
@hero-block-title-icon__width: false;
@hero-block-title-icon__height: false;
@hero-block-title-icon__margin: 0 auto @5;
@hero-block-title-icon__display: block;

@hero-block-content__padding: false;
@hero-block-content__border: false;
@hero-block-content__border-width: false;
```

### Homepage blocks

```scss
@hero-block-cms-title__text-align: false;
@hero-block-cms-title__line-height: false;
@hero-block-cms-title__font-family: false;
@hero-block-cms-title__font-size: false;
@hero-block-cms-title__font-weight: false;
@hero-block-cms-title__text-transform: false;
@hero-block-cms-title__padding: false;
@hero-block-cms-title__margin: false;
@hero-block-cms-title__border: false;
@hero-block-cms-title__border-width: false;

@hero-block-cms-content__padding: false;
@hero-block-cms-content__border: false;
@hero-block-cms-content__border-width: false;
```

### Boxed blocks

```scss
@boxed-block__position: false;
@boxed-block__z-index: false;
@boxed-block__max-width: 620px;
@boxed-block__margin: 0 auto;
@boxed-block__padding: @10 @12;
@boxed-block__box-shadow: @shadow-sm-around;
@boxed-block__background: @z-layer__background;
@boxed-block__border: 1px solid @divider__color;
@boxed-block__border-width: false;
@boxed-block__border-radius: @button__border-radius;
@boxed-block-title__font-family: false;
@boxed-block-title__font-size: false;
@boxed-block-title__font-weight: false;
@boxed-block-title__text-transform: false;
@boxed-block-title__text-align: false;
@boxed-block-title__border: false;
@boxed-block-title__border-width: false;
```
