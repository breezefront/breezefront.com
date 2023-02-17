---
layout: docs
title: Styles
description: Breeze styles
order: 300
---

# Styles

* TOC
{:toc}

## About

Breeze CSS utilize Magento's built-in less compiler and uses the same features
and enhancements. This means you can use the same dev tools that you use when
develop Luma-themes.

## Theme entry points

Breeze provides ready-to-use CSS entry points for theme development. Just create
one of the following files inside your custom theme, and it will be automatically
included to the theme styles:

```
<theme_dir>/
└── web/
    └── css/
        ├── email
        │   ├── _custom.less        <-- Email styles
        │   └── _extend.less        <-- Email styles
        ├── _extend-checkout.less   <-- Checkout styles
        ├── _custom-checkout.less   <-- Checkout styles
        ├── _custom.less            <-- Default styles
        └── _extend.less            <-- Default styles
```

 - Use `extend` files if you are the custom theme developer.
 - Use `custom` files if you are the Breeze theme end-user.

> [How to add custom theme styles?](custom-styles)

## Module entry points

Breeze also provides CSS entry points for easier module integration with Breeze
theme. Create one of the following files inside your module and Breeze theme
will include these styles automatically:

```
<module_dir>/view/frontend/
└── web/
    └── css/
        └── breeze/
            ├── _email.less     <-- Email styles
            ├── _checkout.less  <-- Checkout styles
            └── _default.less   <-- Default styles
```

> [How to add custom module styles?](custom-module#styles)

## Critical and deferred styles

Always put your styles inside `@critical` CSS guard:

```scss
& when (@critical) {
    .breadcrumbs {
        min-height: 50px;
    }
}

& when not (@critical) {
    .breadcrumbs a:hover {
        text-decoration: underline;
    }
}
```

Magento will compile this code in two separate files. Critical styles
will be added to `default.css`, and non-critical will be added to `deferred-default.css`
file. The latter will be loaded asyncroniously to reduce total blocking time
during site load.

How to choose which guard to use?

Styles that affect dimensions or position of visible elements should be placed
in `& when (@critical)` guard. Other styles may use `& when not (@critical)`
guard.

> **Warning!**
> Do not forget to enclose your styles into CSS guard, otherwise your styles
> will be duplicated.

## Dark mode

Dark mode support is disabled by default in Breeze Theme. To activate, you should
add `@respect-color-scheme: true` variable to `_extend.less` or `_custom.less` file.

When enabled, and `prefers-color-scheme: dark` flag is found in visitor's browser
settings Breeze Blank theme will serve dark theme variant automatically.

You can find Dark Mode variables in
[`abstracts/variables/_dark.less`](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/variables/_dark.less)
file.
