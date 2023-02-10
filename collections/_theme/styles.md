---
layout: docs
title: Styles
description: Breeze styles organization
order: 300
---

# Styles

* TOC
{:toc}

## Folder structure

Breeze styles located in `<theme_dir>/web/css/` folder and organized using
the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

Path                    | Description
------------------------|------------------------------------
`abstracts/`            | Less variables and mixins placed here. Everything that doesn't produce css output.
`base/`                 | Reset styles, CSS properties, typography, forms, CSS helper classes.
`components/`           | Reusable components styles (Tabs, Modal, Spinner, etc).
`layout/`               | Unique blocks styles (Header, Layered Navigation, Listing, Search, etc).
`pages/`                | Page-specific styles (Cart, Customer, etc). These are potential candidates for dedicated CSS bundle.
`vendor/`               | A place for the third-party modules styles. We've put Luma mixins here to provide easier integration with styles written for Luma theme.
`_extend.less`          | Empty file for developer needs. Base entry point for child theme.
`_custom.less`          | Empty file for end-client needs. Place it in your custom theme and add any kind of customizations. Added after `_extend.less`.
`default.less`          | Default CSS bundle that is used across all pages.
`checkout.less`         | CSS bundle that is used at checkout page only.

## Bundles

We use CSS bundles to group styles based on their usage per page. Each bundle
has critical and deferred part. Currently, there are two bundles used only:

 -  **default.less** --- commonly used styles goes here. This bundle added on all pages.
 -  **checkout.less** --- styles for checkout page. Added on checkout page only.

> - [How to add custom theme styles?](/custom-styles)
> - [How to add custom module styles?](/custom-module#styles)

Each bundle provides additional file for deferred styles that doesn't affect layout shifts.

 -  **deferred-default.less**
 -  **deferred-checkout.less**

Styles are splitted into critical and deferred parts based on LESS guard added
around the styles. See the next section for more information.

## Critical and deferred styles

When writing styles for Breeze theme, you must put your styles inside `@critical`
CSS guard. By doing that you tell Breeze where to put your styles. When your
styles can cause layout shift you should use `& when (@critical)` guard.
Otherwise --- use `& when not (@critical)` guard.

> **Warning!**
> Do not forget to enclose your styles into CSS guard, otherwise your styles
> will be duplicated in both output files.

Let's see an example to undestand better. Here is how `layout/_breadcrumbs.less`
is coded:

```scss
& when (@critical) {
    .breadcrumbs {
        min-height: @9;
        ul {
            &:extend(.container);
        }
    }
}

& when not (@critical) {
    .breadcrumbs a:hover {
        text-decoration: underline;
    }
}
```

The code above will be compiled by Magento into two separate files. Critical styles
will be added to `default.css`, and non-critical will be added to `deferred-default.css`
file.

> Don't forget to enable _Use CSS critical path_ config option to get maximum
> benefit of the critical CSS:
>
> ```powershell
> bin/magento config:set dev/css/use_css_critical_path 1
> ```
