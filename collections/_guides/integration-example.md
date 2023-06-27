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

## 1. Find the main entry points

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

`Vendor_Module/js/component` --- is a main entry point in the examples above.

When you'll find the main entry point in the module you want to integrate,
you may proceed to the next step.

## 2. Allow inline script

If the module is using inline scripts with `require` calls, you need to add
`data-breeze` attribute to the script tag:

```html
<script data-breeze>
require(...);
</script>

<!-- OR -->
```
{:.chained}

```php
echo $secureRenderer->renderTag('script', ['data-breeze' => true], ...);
```

## 3. Register js components

When you know the main entry point and path to the js file where it's located,
you need to register it in
`Vendor_Module/view/frontend/layout/breeze_default.xml` layout update file.

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

## 4. Add component name

Open `Vendor_Module/js/component` file and add the following line:

```js
define(['jquery'], function ($) {
  'use strict';

  $.widget('widgetName', {
    component: 'Vendor_Module/js/component', // <-- add this line
    create: function () {}
  });
})
```

## 5. Prepare dependencies

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
`Vendor_Module/js/object` files, and make some changes:

<details markdown=1><summary>Vendor_Module/view/frontend/layout/breeze_default.xml</summary>

```diff
           <item name="default" xsi:type="array">
             <item name="items" xsi:type="array">
+              <item name="Vendor_Module/js/function" xsi:type="string">Vendor_Module/js/function</item>
+              <item name="Vendor_Module/js/object" xsi:type="string">Vendor_Module/js/object</item>
               <item name="Vendor_Module/js/component" xsi:type="array">
                 <item name="path" xsi:type="string">Vendor_Module/js/component</item>
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

## 6. That's all

Clear the cache and try to refresh the page on frontend.
