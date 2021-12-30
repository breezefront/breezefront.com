---
layout: default
title: Dark Mode
description: Dark color scheme in Breeze Theme
order: 400
---

# Dark Mode

Dark mode support is enabled by default in Breeze Theme and activated automatically when
`prefers-color-scheme: dark` flag is found in visitor's browser settings. It's done with
simple CSS media query in `web/css/base/_variables.less` file:

```scss
& when (@respect-color-scheme = true) {
    :root {
        @media (prefers-color-scheme: dark) {
            --gray-800: @dark-rgb-gray-800;
            --green: @dark-rgb-green;
            --blue: @dark-rgb-blue;
            --red: @dark-rgb-red;
            --muted-alpha: .8;
            // ...
            --scrollbar-bg: var(--gray-800);
            --scrollbar-color: var(--gray-700);
        }
    }
}
```

Dark RGB values generated using LESS color functions in
`web/css/abstracts/variables/_colors.less` file:

```scss
@dark-gray-800: lighten(@gray-900, 2.5%);
@dark-blue: lighten(@blue-700, 25%);
@dark-green: lighten(@green-700, 35%);
@dark-red: lighten(@red-700, 30%);
@dark-rgb-gray-800: red(@dark-gray-800), green(@dark-gray-800), blue(@dark-gray-800);
@dark-rgb-blue: red(@dark-blue), green(@dark-blue), blue(@dark-blue);
@dark-rgb-red: red(@dark-red), green(@dark-red), blue(@dark-red);
@dark-rgb-green: red(@dark-green), green(@dark-green), blue(@dark-green);
@dark-rgb-base: var(--gray-400);
@dark-rgb-base-bg: var(--gray-900);
// ...
```

## Disable dark mode

If you would like to disable dark mode support, you should add `@respect-color-scheme`
variable to `_extend.less` or `_custom.less` file:

```scss
@respect-color-scheme: false;
```
