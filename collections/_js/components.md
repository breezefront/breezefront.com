---
layout: docs
title: Components
description: Writing Breeze JS Components
order: 200
---

# Components

* TOC
{:toc}

## About

Before we start, let's recall Luma and its way to inject scripts to the page.

The code below will trigger `Vendor_Module/js/component.js` and `mage/menu.js`
resources loading (including all dependencies) using client-side RequireJS library:

```html
<div data-mage-init='{"Vendor_Module/js/component": {}}'></div>
<div data-mage-init='{"menu": {}}'></div>
```

Breeze will do the similar job on the server side: it will find js bundles that
contain required resources for current page and inject them to the
`<head>` section. To make this possible, developer should register
`Vendor_Module/js/component` and `menu` components in `breeze_default.xml`
layout update file:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/component" xsi:type="string">Vendor_Module/js/breeze/file</item>
          <item name="menu" xsi:type="string">Vendor_Module/js/breeze/menu</item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

Let's review component registration syntax.

## Component registration

Each component must be registered in js file. Each js file is declared in
`breeze_default.xml` layout update. Here is an example that register
`Vendor_Module/js/component` component in `default` bundle:


### Minimal example

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/component" xsi:type="string">
            Vendor_Module/js/breeze/file
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

In result of code above, Breeze will inject `Vendor_Module/js/breeze/file.js`
file to the head section.

### Full featured example

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <!-- Bundle name -->
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <!-- Component name -->
          <item name="Vendor_Module/js/component" xsi:type="array">
            <!-- Path to our JS file -->
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/file</item>
            <!-- Config paths to check before injecting JS file -->
            <item name="enabled" xsi:type="helper" helper="Swissup\Breeze\Helper\Config::isAnyEnabled">
              <param name="0">config/path1/enabled</param>
              <param name="1">config/path2/enabled</param>
            </item>
            <!-- JS files to add before our file -->
            <item name="import" xsi:type="array">
              <item name="dependency" xsi:type="string">Vendor_Module/js/lib</item>
            </item>
            <!-- Component names that we declare inside our JS file -->
            <item name="export" xsi:type="array">
              <item name="fullname" xsi:type="string">Vendor_Module/js/component</item>
              <item name="shortname" xsi:type="string">vendorModule</item>
            </item>
            <!-- Dynamic JS: do not inject the file until one of the following condition is met -->
            <item name="load" xsi:type="array">
              <item name="onInteraction" xsi:type="boolean">true</item>
              <item name="onRequire" xsi:type="boolean">true</item>
              <item name="onEvent" xsi:type="array">
                <item name="0" xsi:type="string">click .selector</item>
                <item name="1" xsi:type="string">customEventName</item>
              </item>
              <item name="onReveal" xsi:type="array">
                  <item name="0" xsi:type="string">selector1</item>
                  <item name="1" xsi:type="string">selector2</item>
              </item>
            </item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

### Bundle name

The following bundles are available:

 -  default --- use it when your script is added on all (almost all) pages.
 -  product --- use when your script is added on the product page only.
 -  product-bundle --- for the scripts related to bundle product types.
 -  product-configurable --- for the configurable products.
 -  customer --- for the scripts added on customer/login pages.
 -  cms --- for scripts used across CMS pages.
 -  dynamic --- you may use it to simplify [dynamic components](/docs/components#onrequire) creation.
    Useful, when you want to use `onRequire` in all of your components.

Additionally, you can declare your own bundles. Just make sure that its name is
unique to prevent collisions with other third-party modules.

## Dynamic component

When you add `<item name="load" xsi:type="array">` section to the
[component registration](#full-featured-example), Breeze will not add js file
to the head section. Instead, it will dynamically inject it after certain
condition is met.

### onInteraction

After the first user interaction (mousemove, scroll, click, keydown):

```xml
<item name="load" xsi:type="array">
  <item name="onInteraction" xsi:type="boolean">true</item>
</item>
```

### onRequire

After `require()|define()` will ask for this component:

```xml
<item name="load" xsi:type="array">
  <item name="onRequire" xsi:type="boolean">true</item>
</item>
```

### onEvent

When one of js events will be triggered:

```xml
<item name="load" xsi:type="array">
  <item name="onEvent" xsi:type="array">
    <item name="0" xsi:type="string">click .selector</item>
    <item name="1" xsi:type="string">customEventName</item>
  </item>
</item>
```

### onReveal

When one of matched elements is about to enter the viewport:

```xml
<item name="load" xsi:type="array">
  <item name="onReveal" xsi:type="array">
      <item name="0" xsi:type="string">selector1</item>
      <item name="1" xsi:type="string">selector2</item>
  </item>
</item>
```

## Component declaration

Every Breeze Component is declared using `$.widget` or `$.view` function. Widget
is used to declare most type of components. View is used to declare component
that needs reactivity and need to render KnockoutJS template.

> Component names are saved in shared registry, so you can't use same name for view and widget.

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

## Component initialization

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

## Programmatic usage

Sometimes you'll need to create new component instance or call some method of
existing component programmatically. Breeze allows you to do this with a single
line of javascript code.

Create new component instance or update options of existing one:

```js
$(el).cmpName(options);
```

Get the component instance:

```js
var instance = $(el).cmpName('instance');
```

Call the methodName in the component instance:

```js
$(el).cmpName('methodName', param);
```

Call the methodName statically:

```js
$.fn.cmpName().methodName(param);
```

Additionally, you can collect all instances of specified component name, or call
some method in all instances using `$.widget` or `$.view` functions:

```js
// iterate over all instances
$.widget('widgetName').each(fn);

// call for specified method in all instances
$.widget('widgetName').invoke('close');

// destroy all instances
$.widget('widgetName').destroy();
```
