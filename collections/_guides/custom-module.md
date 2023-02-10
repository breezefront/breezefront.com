---
layout: docs
title: Custom Module
description: How to write Breeze-friendly module for Magento
order: 500
---

# Writing Breeze-friendly Module

* TOC
{:toc}

## About

When it comes to third-party modules, Breeze is highly compatible with blank/luma
modules out of the box since we use the same page structure, blocks, layout
updates, and templates for almost all of the pages.

The only parts that you may need to change are:

 -  CSS styles --- if you use `source/_module.less` entry point for your styles.
 -  Javascript --- if you use `requirejs` in your scripts.
 -  Html templates --- if you use custom knockout tags (`<each>`, `<render>`, etc).

Let's take a look at directory structure of the Breeze-friendly module.

## Directory structure

```
<module>/view/frontend/
├── layout/
│   ├── breeze_catalog_product_view.xml
│   └── breeze_default.xml
├── templates/
└── web/
    ├── css/
    │   └── breeze/
    │       ├── _checkout.less
    │       ├── _email.less
    │       └── _default.less
    ├── js/
    │   └── breeze/
    │       └── component.js
    └── template/
        └── component.html
```

Path                            | Description
--------------------------------|-------------------------------
layout/breeze_catalog_product_view.xml | Layout instructions for product page.
layout/breeze_default.xml       | Layout instructions for all pages. JS components are registered here.
web/css/breeze/_checkout.less   | Styles for checkout page.
web/css/breeze/_default.less    | Styles for all pages.
web/css/breeze/_email.less      | Styles for email templates.
web/js/breeze/component.js      | Breeze js component. You can put multiple components in a single file.
web/template/component.html     | Knockout template for a view component.

Let's review each entry with usage examples.

## Layout updates

When writing module for Breeze Frontend you may want to create layout updates
that will affect Breeze-based theme only and will not change anything in blank/luma
themes. Using `breeze_` prefixed filename you guarantee
that these instructions will not affect blank/luma based theme:

 -  breeze_default.xml
 -  breeze_catalog_category_view.xml
 -  breeze_catalog_category_layered.xml
 -  and so on.

The most common use-case for layout update --- is a JS component registration.
Remember to use `breeze_default.xml` layout update for this case.

## Styles

In order to add your own styles to the Breeze-based theme you need to create
`<module>/view/frontend/web/css/breeze/_default.less` file. This file will be
automatically included on all store pages.

You can also create `<module>/view/frontend/web/css/breeze/_checkout.less` file
for the styles that used at checkout page only.

Here is how your `_default.less` may look like:

```scss
& when (@critical) {
    .selector {
        //
    }
}
& when not (@critical) {
    .selector:hover {
        //
    }
}
```

**Using `@critical` guard is required.** Otherwise your styles will be duplicated
in both critical and deferred styles.

## Email styles

When you want to add custom styles to the email templates, you need to create
`<module>/view/frontend/web/css/breeze/_email.less` file.

 -  Unlike theme styles, email styles doesn't support `@critical` guard.
 -  Use `.email-non-inline()` mixin for complex styles that cannot be inlined
    by Magento.

Example:

```scss
.selector {
    //
}

.email-non-inline() {
    @media @media-sm-down {
        .selector {
            //
        }
    }
}
```

## JS components

> Please read the [JS components page](components) before you proceed further.

JS component lifecycle in Breeze is pretty similar to Luma's components:

 1. DOM parser finds `data-mage-init` or `text/x-magento-init` instructions.
 2. JS Component is created according to these instructions.

The only difference is that you have to register your component in one of js bundles
using `breeze_default.xml` layout update:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/component" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/component</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

Pay attention to the bundle name in the example above and choose the right one
for your component. See the list of available bundles at [JS components page](components).

Now, let's view a basic example of `js/breeze/component.js` file:

```js
(function () {
    'use strict';

    $.widget('uniqueComponentName', {
        component: 'Vendor_Module/js/component', // an alias that's used in the `data-mage-init` instructions.
        create: function () {
            // this.element - Cash collection. See https://github.com/fabiospampinato/cash
            // this.options - object
        }
    });

    $.view('uniqueComponentName', {
        component: 'Vendor_Module/js/component', // an alias that's used in the initialization instructions.
        defaults: {
            template: 'Vendor_Module/component' // see "Knockout templates" section below
        },
        create: function () {
            // this.element - Cash collection. See https://github.com/fabiospampinato/cash
            // this.options - object
        }
    });
})();
```

> Please review [Widgets](widgets) and [Views](views) pages to get more information
> about these components.

## Knockout templates

> Think twice before using knockout templates. We think that they are overused
> in Luma's codebase and we will remove their usages from Breeze in the future.
> Usually `_.template` is more than enough for the majority of the modules.

If your JS component is using knockout template, you should prerender it at the page.
To do that you need to use layout update instructions and our HTML block renderer.

Here is an example that will render knockout or raw html template and will
make it visible for view component from the previous example:

```xml
<referenceContainer name="before.body.end">
    <block class="Swissup\Breeze\Block\HtmlTemplate" name="breeze.Vendor_Module_component" template="Vendor_Module::component.html"/>
</referenceContainer>
```
