---
layout: docs
title: Custom Styles
description: How to add styles using custom Breeze-based theme.
order: 200
---

# Custom styles

* TOC
{:toc}

## Global bundle

> Make sure to [create and change](child-theme) your theme to `Local/breeze-custom`
> before start.

There are two entry points for custom global styles in Breeze theme:

 -  `_extend.less` --- Use this file if you are custom theme developer.
 -  `_custom.less` --- Use this file if you are end-user of the custom theme.

Create `_[extend|custom].less` file in `Local/breeze-custom/web/css` folder. This file
will be included automatically and you can override less variable and create new
styles using this file.

We recommend you to split your customizations across multiple partials:

```scss
@import (reference) 'custom/abstracts/_variables.less';
@import 'custom/layout/_header.less';
@import 'custom/layout/_listing.less';
@import 'custom/layout/_swatches.less';
```

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── web/
│   ├── css/
│   │   ├── custom/
│   │   │   ├── abstracts/
│   │   │   │   └── _variables.less
│   │   │   └── layout/
│   │   │       ├── _header.less
│   │   │       ├── _listing.less
│   │   │       └── _swatches.less
│   │   └── _custom.less
│   └── images/
│       └── logo.svg
├── composer.json
├── registration.php
└── theme.xml
```

## Checkout page bundle

> Make sure to [create and change](child-theme) your theme to `Local/breeze-custom`
> before start.

There are two entry points for custom checkout styles in Breeze theme:

 -  `_extend-checkout.less` --- Use this file if you are custom theme developer.
 -  `_custom-checkout.less` --- Use this file if you are end-user of the custom theme.

Create `_[extend-checkout|custom-checkout].less` file in `Local/breeze-custom/web/css` 
folder. This file will be included automatically and you can override less 
variable and create new styles using this file.

We recommend you to split your customizations across multiple partials:

```scss
@import (reference) 'custom/abstracts/_variables.less';
@import 'custom/layout/checkout/_summary.less';
```

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── web/
│   ├── css/
│   │   ├── custom/
│   │   │   ├── abstracts/
│   │   │   │   └── _variables.less
│   │   │   └── layout/
│   │   │       └── checkout`/
│   │   │           └── _summary.less
│   │   └── _custom-checkout.less
│   └── images/
│       └── logo.svg
├── composer.json
├── registration.php
└── theme.xml
```

## Custom CSS bundle

> Make sure to [create and change](child-theme) your theme to `Local/breeze-custom`
> before start.

Sometimes you may want to create new CSS bundle to use on custom page only. 
Breeze allows you to do this. Let's create a `blog` CSS bundle that will be 
added on the blog pages only:

 1. Create or open `Local/breeze-custom/Magento_Theme/layout/blog.xml`

    > Please note, that the file name depends on blog module you are using. If
    > you are not sure which name to use, please contact blog module developers.

 2. Add the following layout update instruction:

    ```xml
    <referenceBlock name="breeze.css">
        <arguments>
            <argument name="bundles" xsi:type="array">
                <item name="blog" xsi:type="array"></item>
            </argument>
        </arguments>
    </referenceBlock>
    ```

 3. Create `blog.less` file in `Local/breeze-custom/web/css` folder:

    ```scss
    @import (reference) 'abstracts/_all.less';
    @import 'blog/_all.less';
    @import 'vendor/_luma.less';
    @import (reference) 'abstracts/variables/_system.less';
    ```

 4. Create `deferred-blog.less` file in `Local/breeze-custom/web/css` folder:

    ```scss
    @import 'blog.less';
    @critical: false;
    ```
 
 5. Create `blog/_all.less` file in `Local/breeze-custom/web/css/blog` folder:

    ```scss
    & when (@critical) {
        // critical styles
    }
    & when not (@critical) {
        // deferred styles
    }
    ```

 6. Now you can add your styles to `blog/_all.less` file.

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── Magento_Theme/
│   └── layout/
│       └── blog.xml
├── web/
│   ├── css/
│   │   ├── blog\
│   │   │   └── _all.less
│   │   ├── blog.less
│   │   └── deferred-blog.less
│   └── images/
│       └── logo.svg
├── composer.json
├── registration.php
└── theme.xml
```
