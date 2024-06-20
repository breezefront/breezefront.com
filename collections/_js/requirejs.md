---
layout: docs
title: RequireJS
description: RequireJS in Breeze. How to use require and define functions.
order: 50
---

# RequireJS

* TOC
{:toc}

## About

Breeze doesn't use RequireJS library, but we have custom `define` and `require`
functions with similar API. The main differences between requirejs and our
implementation are:

 -  Our implementation is not `amd` compatible. See [AMD dependencies](#amd-dependencies).
 -  We load js file only if it's registered in `breeze_default.xml` layout update.

When running `require` or `define` Breeze will try to find dependencies in the
`$.breezemap` object. If not found, Breeze will load dependencies that
was previously registered in `breeze_default.xml` files.

## Common dependencies

We've implemented most of Magento's built-in components, so code that uses them
will work fine out of the box. The example below is fully compatible with Breeze:

```js
require([
    'jquery',
    'underscore',
    'mage/translate',
    'Magento_Ui/js/modal/modal',
    'Magento_Catalog/js/price-utils',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/customer-data'
], function ($, _, $t, modal, priceUtils, quote, customerData) {
    'use strict';

    // All dependencies successfully resolved in Luma and Breeze
    console.log([...arguments]);
});
```

> Please note, that `jquery` will be resolved as
> [Cash library](https://github.com/fabiospampinato/cash) --- minimal jQuery alternative.

## Third-party dependencies

Let's take a look at another example that works in Luma out of the box but not in
Breeze:

```js
require([
    'Vendor_Module/js/extended-modal'
], function (modal) {
    'use strict';

    console.log(modal); // undefined
});
```

To make this code work with Breeze frontend you need to register `Vendor_Module/js/extended-modal`
in `breeze_default.xml` layout update. Additionally you have to add `import`
property, if your component depends on other components:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/extended-modal" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/extended-modal</item>
            <item name="import" xsi:type="array">
                <item name="modal" xsi:type="string">modal</item>
            </item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

## AMD dependencies

Let's take a look at the following example:

```js
require([
    'https://unpkg.com/marquee3000@1.1.1/marquee3k.min.js'
], function (Marquee) {
    'use strict';

    console.log(Marquee); // undefined
    console.log(Marquee3k); // function!
});
```

In the example above, `Marquee` is undefined, but `Marquee3k` is not. This happens
because `marquee3k.min.js` exposes itself into `window.Marquee3k` when `define.amd`
is not supported.

In Breeze you can setup shim for the scripts that register itself into
global variables. Add the following code to `breeze_default.xml`:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="https://unpkg.com/marquee3000@1.1.1/marquee3k.min.js" xsi:type="array">
            <item name="path" xsi:type="string">https://unpkg.com/marquee3000@1.1.1/marquee3k.min.js</item>
            <item name="global" xsi:type="string">Marquee3k</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

Now, both variables will be resolved as Marquee3k function.
