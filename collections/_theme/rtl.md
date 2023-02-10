---
layout: docs
title: RTL Direction
description: RTL direction support in Breeze
order: 600
---

# RTL Direction

* TOC
{:toc}

## About

Breeze uses [swissup/module-rtl](https://github.com/swissup/module-rtl) module
to support RTL languages. This module automatically generates appropriate
CSS depending on active store view language settings. All you need is to use
one of RTL mixins when adding property that behaves differently on RTL and LTR
directions.

## Mixins

Mixin                                       | Example
--------------------------------------------|-----------------------------------
.modrtl(@property, @ltrValue, @rtlValue)    | .modrtl(display, block, inline)
.direction(@value)                          | .direction(rtl)
.background-position(@ltrValue, @rtlValue)  | .background-position(100% 50%, 0 50%)
.text-align(@direction)                     | .text-align(left)
**Padding**                                 |
.padding(@value)                            | .padding(10px 25px 10px 5px)
.padding-left(@value)                       | .padding-left(5px)
.padding-right(@value)                      | .padding-right(25px)
**Margin**                                  |
.margin(@value)                             | .margin(10px 25px 10px 5px)
.margin-left(@value)                        | .margin-left(5px)
.margin-right(@value)                       | .margin-right(25px)
**Positioning**                             |
.float(@direction)                          | .float(left)
.clear(@direction)                          | .clear(left)
.left(@distance)                            | .left(20px)
.right(@distance)                           | .right(20px)
**Border**                                  |
.border-radius(@value)                      | .border-radius(5px 0 0 5px)
.border-[top\|right\|bottom\|left]-radius(@radius)  | .border-top-radius(5px)
.border-[top\|bottom]-[left\|right]-radius(@radius) | .border-top-left-radius(5px)
.border-left(@border-style)                 | .border-left(1px solid #f4f4f4);
.border-right(@border-style)                | .border-right(1px solid #f4f4f4);
.border-color(@value)                       | .border-color(#f4f4f4 transparent #eee #f4f4f4)
.border-left-color(@color)                  | .border-left-color(#f4f4f4)
.border-right-color(@color)                 | .border-right-color(transparent)
.border-style(@value)                       | .border-style(dotted dashed none solid)
.border-left-style(@style)                  | .border-left-style(solid)
.border-right-style(@style)                 | .border-right-style(none)
.border-width(@value)                       | .border-width(1px 0 1px 2px)
.border-left-width(@width)                  | .border-left-width(0)
.border-right-width(@width)                 | .border-right-width(2px)

## Example

The code below will be automatically compiled into RTL/LTR-based language
depending on your store language settings.

```scss
.selector {
    .left(0);
    .modrtl(transform, translateX(-100%), translateX(100%));

    &.shown {
        transform: translateX(0);
    }

    .close {
        .right(0);
    }
}
```

Here is the output for LTR language:

```css
.selector {
    left: 0;
    transform: translateX(-100%);
}
.selector.shown {
    transform: translateX(0);
}
.selector .close {
    right: 0;
}
```

And here is the output for RTL language:

```css
.selector {
    right: 0;
    transform: translateX(100%);
}
.selector.shown {
    transform: translateX(0);
}
.selector .close {
    left: 0;
}
```