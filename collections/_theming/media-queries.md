---
layout: docs
title: Media queries
description: Media queries
---

# Media queries

* TOC
{:toc}

## About

Media queries help to build design that works well across different
devices. Most common media queries (responsive breakpoints) based on viewport
widths.

## Responsive breakpoints

```scss
& when (@critical) {
    // min-width queries
    @media @media-xs { ... } // (min-width: 480px) @xs
    @media @media-sm { ... } // (min-width: 640px) @sm
    @media @media-md { ... } // (min-width: 768px) @md
    @media @media-lg { ... } // (min-width: 1024px) @lg
    @media @media-xl { ... } // (min-width: 1280px) @xl
    @media @media-xxl { ... } // (min-width: 1536px) @xxl

    // max-width queries
    @media @media-xxl-down { ... } // (max-width: 1535.98px) @xl-max
    @media @media-xl-down { ... } // (max-width: 1279.98px) @lg-max
    @media @media-lg-down { ... } // (max-width: 1023.98px) @md-max
    @media @media-md-down { ... } // (max-width: 767.98px) @sm-max
    @media @media-sm-down { ... } // (max-width: 639.98px) @xs-max
    @media @media-xs-down { ... } // (max-width: 479.98px) @xxs-max
}
```

You can customize breakpoint values using LESS variables:

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

## Hover behavior

```scss
@media-hover: ~"(hover: hover)"; // devices with pointer device (mouse)
@media-hover-none: ~"(hover: none)"; // touch devices without a pointer
```

This media query is useful to prevent hover-reveal effects on touch devices:

```scss
& when (@critical) {
    @media @media-hover {
        .parent .child {
            opacity: 0;
            pointer-events: none;
        }
    }
}
& when not (@critical) {
    .parent:hover .child {
        opacity: 1;
        pointer-events: all;
    }
}
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
