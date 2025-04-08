---
layout: docs
title: CSS Helpers
description: CSS helpers
---

# CSS Helpers

* TOC
{:toc}

## About

Magento pagebuilder doesn't allow to implement some common design approaches.
CSS classes comes to the rescue!

Source code:

 - [helpers.less](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/base/_helpers.less){:target="_blank" rel="noopener"}
 - [typography.less](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/base/_typography.less){:target="_blank" rel="noopener"}

## Animations

Read more about [scroll reveal](/docs/scroll-reveal) and
[zoom on hover](/docs/zoom-on-hover) animations.

## Typography

```html
<div class="heading">Heading</div>
<div class="h1">H1 title</div>
<div class="h2">H2 title</div>
<div class="h3">H3 title</div>
<div class="h4">H4 title</div>
<div class="h5">H5 title</div>
<div class="h6">H6 title</div>
<ul class="disc"><li>Styled list item</li></ul>
<div class="table-wrapper"><table></table></div>
<div class="prose">...</div>
<div class="text-reset">...</div>
<div class="note">Muted text</div>
<div class="nowrap">No wraps inside</div>
<div class="underline">Underlined</div>
<div class="uppercase">Uppercased</div>
<div class="lowercase">Lowercased</div>
<div class="capitalize">Capitalized</div>
<div class="text-[xs|sm|base|lg|xl|2xl|3xl|4xl|5xl]">Font size</div>
<div class="text-[left|right|center]">Aligned text</div>
<div class="font-[sans|serif|mono]">Text with selected font-face</div>
<div class="font-[thin|extralight|light]">Thin font weights</div>
<div class="font-[normal|medium|semibold]">Normal font weights</div>
<div class="font-[bold|extrabold|black]">Bold font weights</div>
<div class="leading-[tight|snug|normal|relaxed|loose]">Line heights</div>
```

## Icon

```html
<div class="icon"><svg>..</svg></div>
<div class="icon small"><svg>..</svg></div>
<div class="icon big"><svg>..</svg></div>
<div class="icon rounded"><svg>..</svg></div>
<div class="icon rounded-sm"><svg>..</svg></div>
<div class="icon rounded-lg"><svg>..</svg></div>
<div class="icon rounded-full"><svg>..</svg></div>
```

## Colors

```html
<div class="color-base">Base color</div>
<div class="color-brand">Brand color</div>
<div class="color-heading">Heading color</div>
<div class="color-link">Link color</div>
<div class="color-muted">Muted color</div>
<div class="color-danger">Danger color</div>
<div class="color-success">Success color</div>
<div class="color-info">Info color</div>
<div class="color-inherit">Inherited color</div>
<div class="color-invert" style="background: #000">Dark section</div>
```

## Positioning

```html
<div class="absolute top-0 bottom-0 left-0 right-0"></div>
<div class="relative z-10 z-20 z-30 z-40 z-50"></div>
```

## Dimensions

```html
<div class="max-w-[xs|sm|md|lg|xl|xxl|40|80] mx-auto"></div>
<div class="w-full h-full"></div>
<div class="aspect-auto"></div>
<div class="aspect-square"></div>
<div class="aspect-video"></div>
```

## Display

```html
<div class="hide"></div>
<div class="show"></div>
<div class="abs-visually-hidden"></div>
<div class="grid grid-cols-2 grid-cols-3 grid-cols-4"></div>
<div class="flex flex-wrap flex-nowrap items-start items-end items-center items-baseline"></div>
<div class="justify-around justify-center justify-between justify-end justify-evenly"></div>
<div class="shrink-0 grow-0 gap-1..gap-8 row-gap-1..row-gap-8"></div>
```

## Shadow

```html
<div class="shadow-sm"></div>
<div class="shadow"></div>
<div class="shadow-md"></div>
<div class="shadow-lg"></div>
<div class="shadow-xl"></div>
<div class="shadow-2xl"></div>

<div class="shadow-sm-around"></div>
<div class="shadow-around"></div>
<div class="shadow-md-around"></div>
<div class="shadow-lg-around"></div>
<div class="shadow-xl-around"></div>
<div class="shadow-2xl-around"></div>
```