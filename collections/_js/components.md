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

The code below shows three different approaches to load component in Magento.
Any of these approaches may be used by Magento developer:

```html
<!-- 1. data-mage-init -->
<div data-mage-init='{"Vendor_Module/js/component": {}}'></div>

<!-- 2. x-magento-init -->
<script type="text/x-magento-init">
{
    ".class-name": {
        "Vendor_Module/js/component": {}
    }
}
</script>

<!-- 3. inline `require` call -->
<script>
require(['Vendor_Module/js/component'], function () {
    //
});
</script>
```

While the code above is working in Luma out of the box, in Breeze you need to register
`Vendor_Module/js/component` component and its dependencies using `breeze_default.xml` file.

## Component registration

### Minimal example

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <!-- Vendor_Module/js/component is a component name used in DOM structure -->
          <item name="Vendor_Module/js/component" xsi:type="array">
            <!-- Path to the js file with component declaration -->
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/file</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

In result of code above, Breeze will load `Vendor_Module/js/breeze/file.js`.

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
            <!-- Load this file when bundle is active. Used when merge/bundling is disabled. -->
            <item name="autoload" xsi:type="boolean">true</item>
            <!-- JS files to load before our file -->
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
              <item name="onDom" xsi:type="array">
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
 -  checkout --- for the scripts added on checkout cart page.
 -  dynamic --- for dynamic scripts that should not bundled at all.

Additionally, you can declare your own bundles. Just make sure that its name is
unique to prevent collisions with other third-party modules.

## Dynamic component

When you add `<item name="load" xsi:type="array">` section to the
[component registration](#full-featured-example), Breeze will not load this js file
with bundle. Instead, it will dynamically inject it after certain
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

### onDom

When one of matched elements is found in DOM structure:

```xml
<item name="load" xsi:type="array">
  <item name="onDom" xsi:type="array">
    <item name="0" xsi:type="string">selector1</item>
    <item name="1" xsi:type="string">selector2</item>
  </item>
</item>
```

## Component declaration

Just like in Luma, every component is declared using `$.widget`, `Component.extend`,
plain object, or function notation. The only difference that you must add `component`
property with proper component name (The name that is used in DOM structure).

### Widget

```js
define(['jquery'], ($) => {
  'use strict';

  $.widget('uniqueWidgetName', {
      component: 'Vendor_Module/js/component', // This line is required in Breeze
      create: function () {
          console.log(this.element);
          console.log(this.options);
      }
  });
});
```

### UI Component

```js
define(['uiComponent'], (Component) => {
  'use strict';

  return Component.extend({
    component: 'Vendor_Module/js/component', // This line is required in Breeze
    create: function () {
        console.log(this.element);
        console.log(this.options);
    }
  });
});
```

### Plain object

```js
define([], () => {
  'use strict';

  return {
    component: 'Vendor_Module/js/component', // This line is required in Breeze
    'Vendor_Module/js/component': function () {
      //
    }
  };
});
```

### Plain Function

```js
define([], () => {
  'use strict';

  var cmp = function () {
    //
  };

  cmp.component = 'Vendor_Module/js/component'; // This line is required in Breeze

  return cmp;
});
```

## Programmatic usage

```js
// Create component
require(['Vendor_Module/js/component'], (component) => {
  var instance = component(settings, element);
});

// Retrieve previously created component
require(['jquery'], ($) => {
  // get widget component instance
  var instance = $(el).uniqueWidgetName('instance');

  // or get the component of any type
  var instance = $(el).component('Vendor_Module/js/component');
});
```
