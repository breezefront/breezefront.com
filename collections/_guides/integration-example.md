---
layout: docs
title: Integration Example
description: How to create integration with third-party module
order: 590
---

# Integration Example

* TOC
{:toc}

## About

On this page, you’ll find out how to integrate third-party Luma-based module.

## 1. Find components to integrate

Every Magento component starts its lifecycle from initialization in `*.phtml`
template. It may be written as a `data-mage-init` or `x-magento-init` configs,
or inline `require` call:

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
    $(el).widgetName();
});
</script>
```

`Vendor_Module/js/component` --- is a component name in the examples above.

The easiest way to find component names to integrate is to add `?breeze=1`
parameter to your URL and checl the browser developer console output:

![Unknown components reported by Breeze](/assets/img/integration-example/unknown-components.webp){:width="835" height="267"}

When you'll find the component names you want to integrate, you may proceed
to the next step.

## 2. Register js components

When you know the component name and path to the js file where it's located,
you need to register it in the `Vendor_Module/view/frontend/layout/breeze_default.xml`
layout update file.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceBlock name="breeze.js">
      <arguments>
        <argument name="bundles" xsi:type="array">
          <item name="default" xsi:type="array">
            <item name="items" xsi:type="array">
              <item name="Vendor_Module/js/component" xsi:type="array">
                <item name="path" xsi:type="string">Vendor_Module/js/component</item>
              </item>
            </item>
          </item>
        </argument>
      </arguments>
    </referenceBlock>
  </body>
</page>
```

## 3. Add component name

Open `Vendor_Module/js/component` file and add component name. See the
corresponding section below:

<details markdown=1><summary>Adding component name to widget-based component</summary>

```diff
 define(['jquery'], function ($) {
     'use strict';

     $.widget('widgetName', {
+        component: 'Vendor_Module/js/component',
     });
 });
```
</details>

<details markdown=1><summary>Adding component name to uiComponent-based component</summary>

```diff
 define(['uiComponent'], function (Component) {
     'use strict';

     return Component.extend({
+        component: 'Vendor_Module/js/component',
     });
 });
```
</details>

<details markdown=1><summary>Adding component name to function-based component</summary>

```diff
 define(['jquery'], function ($) {
     'use strict';

-    return function (options, element) {
+    var result = function (options, element) {
     };
+
+    result.component = 'Vendor_Module/js/component';
+
+    return result;
 });
```
</details>

<details markdown=1><summary>Adding component name to object-based component</summary>

```diff
 define(['jquery'], function ($) {
     'use strict';

     return {
+        component: 'Vendor_Module/js/component',
     };
 });
```
</details>

## 4. Prepare dependencies

Sometimes it's not enough to add component name. For example, if component
requires additional dependencies:

```js
define([
  'jquery',
  'Vendor_Module/js/function',
  'Vendor_Module/js/object'
], function ($, fn, obj) {
  'use strict';

  ...
})
```

We need to register `Vendor_Module/js/function` and
`Vendor_Module/js/object` files, and add corresponsing component names to
each of these files:

<details markdown=1><summary>Vendor_Module/view/frontend/layout/breeze_default.xml</summary>

```diff
           <item name="default" xsi:type="array">
             <item name="items" xsi:type="array">
               <item name="Vendor_Module/js/component" xsi:type="array">
                 <item name="path" xsi:type="string">Vendor_Module/js/component</item>
+                <item name="import" xsi:type="array">
+                  <item name="Vendor_Module/js/function" xsi:type="string">Vendor_Module/js/function</item>
+                  <item name="Vendor_Module/js/object" xsi:type="string">Vendor_Module/js/object</item>
+                </item>
               </item>
             </item>
           </item>
```
</details>

<details markdown=1><summary>Vendor_Module/view/frontend/web/js/function.js</summary>

```diff
 define([
     'jquery'
 ], function ($) {
     'use strict';

-    return function (options, element) {
+    var result = function (options, element) {
     };
+
+    result.component = 'Vendor_Module/js/function';
+
+    return result;
 });
```
</details>

<details markdown=1><summary>Vendor_Module/view/frontend/web/js/object.js</summary>

```diff
 define([
     'jquery'
 ], function ($) {
     'use strict';

     return {
+        component: 'Vendor_Module/js/object',
         'Vendor_Module/js/object': function (options, element) {}
     };
 });
```
</details>

## 5. That's all

Clear the cache and try to refresh the page on frontend.
