---
layout: docs
title: Media queries
description: Media queries
---

# Media queries

* TOC
{:toc}

## About

Media queries help to build responsive layout that works well across different
devices. Here is an example of common media queries:

```scss
& when (@critical) {
    @media @media-md {
        // min-with 768px
    }

    @media @media-xs-down {
        // max-with 479.98px
    }

    @media @media-hover {
        // devices with ability to hover pointer over element
    }

    @media @media-retina {
        // devices high DPI ratio
    }
}
```

## Screen sizes

```scss
@xs:  480px;
@sm:  640px;
@md:  768px;
@lg:  1024px;
@xl:  1280px;
@xxl: 1536px;

@xxs-max: (@xs - 0.02);
@xs-max: (@sm - 0.02);
@sm-max: (@md - 0.02);
@md-max: (@lg - 0.02);
@lg-max: (@xl - 0.02);
@xl-max: (@xxl - 0.02);
```

## Min-width queries

```scss
@media-xs:  ~"(min-width: @{xs})";
@media-sm:  ~"(min-width: @{sm})";
@media-md:  ~"(min-width: @{md})";
@media-lg:  ~"(min-width: @{lg})";
@media-xl:  ~"(min-width: @{xl})";
@media-xxl: ~"(min-width: @{xxl})";
```

## Max-width queries

```scss
@media-xs-down: ~"(max-width: @{xxs-max})";
@media-sm-down: ~"(max-width: @{xs-max})";
@media-md-down: ~"(max-width: @{sm-max})";
@media-lg-down: ~"(max-width: @{md-max})";
@media-xl-down: ~"(max-width: @{lg-max})";
@media-xxl-down: ~"(max-width: @{xl-max})";
```

## Hover behavior

```scss
@media-hover: ~"(hover: hover)";
@media-hover-none: ~"(hover: none)";
```

## Screen density

```scss
@media-retina: ~"(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
```

## Color scheme

```scss
@media-dark: ~"(prefers-color-scheme: dark)";
@media-light: ~"(prefers-color-scheme: light)";
```
