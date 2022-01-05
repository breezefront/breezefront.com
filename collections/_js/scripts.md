---
layout: default
title: Scripts
description: Writing Breeze scripts
order: 100
---

# Scripts

* TOC
{:toc}

## General Approach

When using Luma, the code below will be parsed by js DOM walker,
then it will trigger resource loading via RequireJS, and then the component
will be initialized:

```html
<div data-mage-init='{"Vendor_Module/js/component": {}}'></div>
```

Unlike default Magento frontend, Breeze doesn't use RequireJS to dynamically
inject a components into the page.

Instead, the code above will be parsed on the server-side, then Breeze will
inject required scripts to the page's `<head>` section. You may think of it
like server-side RequireJS.

To make this possible, we register a path to the javascript file for each
component using layout update instructions. These registrations are grouped
into bundles to decrease network requests count.

## Component Registration

Each component must be registered in `breeze_default.xml` layout update file.
Here is an example that register `Vendor_Module/js/file` component in
`customer` bundle:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="customer" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/file" xsi:type="array">
            <!-- Path to file with component declaration -->
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/file</item>

              <!-- A flag that tells Breeze if the component should be used (required when bundles are enabled) -->
              <item name="enabled" xsi:type="helper" helper="Swissup\Breeze\Helper\Config::isEnabled">
                <param name="path">config/path/enabled</param>
              </item>

              <!-- Optional. Helpful if you use multiple names for the same component -->
              <!-- 1. data-mage-init='{"vendorModule": {}}'  -->
              <!-- 2. data-mage-init='{"Vendor_Module/js/file": {}}' -->
              <item name="names" xsi:type="array">
                <item name="fullname" xsi:type="string">Vendor_Module/js/file</item>
                <item name="shortname" xsi:type="string">vendorModule</item>
              </item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

The following bundles are available:

 -  default --- use it when your script is added on all (almost all) pages.
 -  product --- use when your script is added on the product page only.
 -  product-bundle --- for the scripts related to bundle product types.
 -  product-configurable --- for the configurable products.
 -  customer --- for the scripts added on customer/login pages.
 -  cms --- for scripts used across CMS pages.

Additionally, you can declare your own bundles. Just make sure that its name is
unique to prevent collisions with other third-party modules.

## Component Declaration

Every Breeze Component is declared using `$.widget` or `$.view` function. Widget
is used to declare most type of components. View is used to declare component
that needs reactivity and need to render KnockoutJS template.

```js
// Dropdown widget example
$.widget('dropdown', {
    // Component alias to search in DOM structure
    component: 'dropdown',

    // Default options
    options: {
        parent: null,
        activeClass: 'active',
        dialog: false,
        menu: '[data-target="dropdown"]'
    },

    // Widget constructor
    create: function () {
        console.log(this.element);
        console.log(this.options);
    }
});


// Wishlist View component
$.view('wishlistView', {
    component: 'Magento_Wishlist/js/view/wishlist',
    wishlist: $.sections.get('wishlist')
});
```

## Component Initialization

Breeze Components are the replacements for Luma Widgets and very basic
uiComponents. In most cases Breeze Components initialization is fully compatible
with Luma-based initialization format:

```html
<!-- Init component via data-mage-init attribute -->
<div data-mage-init='{"Vendor_Module/js/component": {}}'></div>

<!-- Init component via text/x-magento-init script -->
<div class="class-name"></div>
<script type="text/x-magento-init">
{
    ".class-name": {
        "Vendor_Module/js/component": {
            "options": {}
        }
    }
}
</script>

<!-- Init component via scope and Magento_Ui/js/core/app -->
<div data-bind="scope: 'scopeName'"></div>
<script type="text/x-magento-init">
{
    "*": {
        "Magento_Ui/js/core/app": {
            "components": {
                "scopeName": {
                    "component": "Vendor_Module/js/view/component",
                    "config": {}
                }
            }
        }
    }
}
</script>

<!-- Init component programmatically -->
<script data-breeze>
$(document).on('breeze:load', function () {
    $(el).dropdown(options);
});
</script>
```
