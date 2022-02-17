---
layout: default
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

## Less variables

LESS variables used for most customization needs. These variables
compiled into resulting CSS file during static content deployment and doesn't
increase theme styles footprint. **Developers should stick to LESS variables usage.**

You can find all variables definitions inside `web/css/abstracts/variables`
folder. If you are not familiar with LESS variables, please refer to
[official LESS docs](https://lesscss.org/features/#variables-feature).

Here is an example of some LESS variables and their usage taken from Breeze sources:

```scss
@font-sans:  ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
@font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
@font-mono:  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

@rgb-blue: red(@blue-700), green(@blue-700), blue(@blue-700);

@link__text-decoration: none;
@link__hover__text-decoration: underline;
@link__color: ~"rgba(var(--link-color), var(--link-alpha))";

@ring__width: 2px;
@ring__offset: 1px;
@ring__color: ~"rgba(var(--ring-color), var(--ring-alpha, 1))";

@rgb-base: var(--gray-900);
@rgb-ring: var(--brand-color);
@rgb-link: var(--blue);

@dark-blue: lighten(@blue-700, 25%);
@dark-rgb-base: var(--gray-400);
@dark-rgb-blue: red(@dark-blue), green(@dark-blue), blue(@dark-blue);

a {
   color: @link__color;
   text-decoration: @link__text-decoration;
   &:hover {
       text-decoration: @link__hover__text-decoration;
   }
}
```

Did you notice `var(--property)` usages? Those are CSS properties.

## CSS properties

[CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
used for styles where dynamic calculation in browser is required --- dark theme
based on visitor's `prefer-color-scheme` setting, listing columns count based on
visitor's screen size, etc.

Changing CSS properties doesn't require static content deployment which makes
them great to use for minor color customizations by end-client.

Here is an example of CSS properties and their usage:

```scss
:root {
   --blue: @rgb-blue;
   --base-color: @rgb-base;
   --link-alpha: .85;
   --link-color: @rgb-link;
   --ring-color: @rgb-ring;

   @media (prefers-color-scheme: dark) {
      --blue: @dark-rgb-blue;
      --base-color: @dark-rgb-base;
   }
}

a:hover {
   --link-alpha: 1;
}
```

## Mixins

Mixin --- is a [LESS feature](https://lesscss.org/features/#mixins-feature)
that allow to "mix-in" existing blocks of CSS
properties into specified selector. Breeze uses mixins with
[LESS's `&:extend()` pseudo-class](https://lesscss.org/features/#extend-feature)
to greatly reduce size of compiled styles.

Breeze mixins are located in `web/css/abstracts/mixins` folder. They are declared just
like regular CSS sections, the only difference is that they are not rendered
in resulting CSS file. So, if nobody is using a mixin, you won't see
its styles in the compiled CSS file.

Here is mixins declarations examples:

```scss
.transition {
    transition: background-color var(--transition-duration),
                border-color var(--transition-duration),
                box-shadow var(--transition-duration),
                color var(--transition-duration),
                opacity var(--transition-duration),
                transform var(--transition-duration),
                visibility var(--transition-duration) 0s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.scrollbar {
    &::-webkit-scrollbar {
        width: @scrollbar__width;
        height: @scrollbar__width;
    }
    &::-webkit-scrollbar-track {
        background-color: ~"rgb(var(--scrollbar-bg))";
        border-radius: @scrollbar__border-radius;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ~"rgb(var(--scrollbar-color))";
        border-radius: @scrollbar__border-radius;
    }
}
```

And here is a usage example from `web/css/layout/_file.less`:

```scss
.container-we-want-to-animate {
   &:extend(.transition);
}
.container-we-want-to-use-fancy-scrollbars-with {
   &:extend(.scrollbar all);
}
```
