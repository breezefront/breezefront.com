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

With our newest **Better Compatibility** mode, integration became much easier.
Even, when the mode is disabled, you can still force its status for your module
programmatically.

## Better compatibility

This approach is the easiest way to integrate Luma-based module with Breeze.

To enable "Better Compatibility" mode for your particular module, add the
following code in the `Vendor_Module/view/frontend/layout/breeze_default.xml`
layout update file:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceBlock name="breeze.js">
      <arguments>
        <argument name="better_compatibility" xsi:type="array">
          <item name="Vendor_Module" xsi:type="boolean">true</item>
        </argument>
      </arguments>
    </referenceBlock>
  </body>
</page>
```

This code ensures that Breeze will use "Better Compatibility" mode for `Vendor_Module`
despite of the global setting.

**Now, clear the cache and check if the module is working fine!**

## Moving further

Depending on the "Better Compatibility" results you may want to proceed with
the following options:

 -  [Override selected component](#override-components) to fix possible js errors.
 -  [Move your component](#move-component-to-the-bundle) to one of the Breeze bundles to reduce ajax requests.
 -  [Pre-render html templates](#pre-render-html-templates) to speedup component rendering.
 -  [Include module's CSS](#include-module-css) styles.

Let's review each step!

## Override component

If you are getting js errors in "Better Compatibility" mode, you may want to
override component. To do so, let's tell Breeze to load another file instead of
the original one.

> Remember to put this code in `breeze_default.xml` file.
> You may refer to `breeze.js` block only from the `breeze_default.xml` file.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceBlock name="breeze.js">
      <arguments>
        <argument name="better_compatibility" xsi:type="array">
          <item name="Vendor_Module" xsi:type="boolean">true</item>
        </argument>
        <argument name="bundles" xsi:type="array">
          <item name="dynamic" xsi:type="array">
            <item name="items" xsi:type="array">
              <item name="Vendor_Module/js/component" xsi:type="array">
                <item name="path" xsi:type="string">Vendor_Module/js/breeze/component</item>
              </item>
            </item>
          </item>
        </argument>
      </arguments>
    </referenceBlock>
  </body>
</page>
```

In this example, when Breeze tries to load `Vendor_Module/js/component`, it will
load `Vendor_Module/js/breeze/component` file instead. The overriden file could
be a copy of original file with necessary fixes applied.

Please note that we are using `dynamic` bundle in the code. This is important!

## Move component to the bundle

> 1. Proceed to this section only if the component is working fine already.
> 2. It's perfectly fine to keep your component in the "dynamic" bundle, unless
>    your are adding tens or hundreds of such components.

Let's assume that you want to move `Vendor_Module/js/component` to the default
bundle. The code of your component is following:

```js
define([
  'Vendor_Module/js/dependency1',
  'dependency2'
], (dep1, dep2) => {
  //
})
```

To move your component to one of the Breeze bundles, update the previous code:

```diff
         <argument name="bundles" xsi:type="array">
-          <item name="dynamic" xsi:type="array">
+          <item name="default" xsi:type="array">
             <item name="items" xsi:type="array">
               <item name="Vendor_Module/js/component" xsi:type="array">
                 <item name="path" xsi:type="string">Vendor_Module/js/breeze/component</item>
+                <item name="anonymous" xsi:type="boolean">true</item>
+                <item name="import" xsi:type="array">
+                    <item name="0" xsi:type="string">Vendor_Module/js/dependency1</item>
+                    <item name="1" xsi:type="string">dependency2</item>
+                </item>
               </item>
+               <item name="Vendor_Module/js/dependency1" xsi:type="array">
+                 <item name="path" xsi:type="string">Vendor_Module/js/dependency1</item>
+                <item name="anonymous" xsi:type="boolean">true</item>
+               </item>
+               <item name="dependency2" xsi:type="array">
+                 <item name="path" xsi:type="string">Vendor_Module/js/dependency2</item>
+                <item name="anonymous" xsi:type="boolean">true</item>
+               </item>
```

It's important to list all dependencies of your component in the `import` section
to ensure that they are loaded before your component.

Remember to choose the bundle wisely:

 -  default --- use it when your script is added on all (almost all) pages.
 -  product --- use when your script is added on the product page only.
 -  product-bundle --- for the scripts related to bundle product types.
 -  product-configurable --- for the configurable products.
 -  customer --- for the scripts added on customer/login pages.
 -  checkout --- for the scripts added on checkout cart page.

## Pre-render HTML templates

If your component is using HTML templates, you may want to pre-render them to
speedup component rendering.

Use the following layout update instruction to do that:

```xml
<referenceContainer name="breeze.container">
  <block class="Swissup\Breeze\Block\HtmlTemplate" template="Vendor_Module::path/to/template.html">
    <arguments>
      <argument name="id" xsi:type="string">Vendor_Module/path/to/template.html</argument>
    </arguments>
  </block>
</referenceContainer>

```

## Include module CSS

If your module has its own `_module.less` file, you may want to include it in
Breeze theme too.

To do so, use the following approach:

1. Create `web/css/breeze/_default.less` file in your module with the following
   contents:

   ```scss
   @import '../source/_module.less';
   ```

2. Declare `@critical` variable in your existing `source/_module.less` to
   prevent error in Luma theme:

   ```scss
   @critical: unsure;
   ```

3. Wrap your styles in `source/_module.less` into `@critical` guards:

   ```diff
    & when (@media-common = true) {
   +& when (@critical = unsure), (@critical) {
        // Put critical styles here
   +}
   +& when (@critical = unsure), (@critical = false) {
        // Put non-critical styles here
   +}
    }

    .media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
   +& when (@critical = unsure), (@critical) {
        // Put critical styles here
   +}
    }
   ```

4. Add missing variables to `web/css/breeze/_default.less`.
   For example, if your styles use `@font-weight__semibold` variable and it's not
   available in Breeze theme:

   ```scss
   @import '../source/_module.less';
   @font-weight__semibold: 400;
   ```
