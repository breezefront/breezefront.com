---
layout: default
title: Integration Tips
description: Module integration tips and tricks
order: 600
---

# Module Integration Tips

* TOC
{:toc}

## About

> If you didn't read Breeze-friendly module page, please [take a look](/custom-module).

If you have a module that already works with Luma-based theme, you are probably
don't want to duplicate existing styles or javascript code just to make your
module compatible with another frontend.

We didn't want to do this too when added integration for [all of our modules](https://swissuplabs.com/magento-extensions.html?cat=17),
so we collect some of the tricks we've used.

## How to reuse styles from \_module.less

 1. Add `@import` instruction into `breeze/_default.less`:

    ```scss
    @import '../source/_module.less';
    ```

 2. Declare `@critical` variable in `source/_module.less` to prevent error in Luma theme:

    ```scss
    @critical: unsure;
    ```

 3. Wrap your styles into `@critical` guards:

    ```diff
     & when (@media-common = true) {
    +& when (@critical = unsure), (@critical) {
         .selector {
             //
         }
    +}
    +& when (@critical = unsure), (@critical = false) {
         .selector:hover {
             //
         }
    +}
     }

     .media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
    +& when (@critical = unsure), (@critical) {
         .selector {
             //
         }
    +}
     }
    ```

 4. This step is optional. Add missing variables to `breeze/_default.less`. For
    example, if your styles use `@font-weight__semibold` variable and it's not
    available in Breeze theme:

    ```scss
    @import '../source/_module.less';
    @font-weight__semibold: 400;
    ```

## How to reuse js widgets

When your module has _simple_ widget for Luma theme, you can slightly modify it
to make it compatible with both Luma and Breeze. Take a look at the examples below.

**Widget**

```diff
 define([
     'jquery'
 ], function ($) {
     'use strict';

     $.widget('widgetName', {
+        component: 'Vendor_Module/js/component',
         _create: function () {
             //
         }
     });
 });
```

**Function**

Luma compatible code:

```js
define([
    'jquery',
    'knockout'
], function ($, ko) {
    'use strict';

    return function (options, element) {
        //
    };
});
```

_Luma and Breeze_ compatible code:

```js
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'knockout'], factory);
    } else {
        var fn = factory($, ko);

        $(document).on('breeze:mount:Vendor_Module/js/component', function (event, data) {
            fn(data.settings, data.element);
        });
    }
}(function ($, ko) {
    'use strict';

    return function (options, element) {
        //
    };
}));
```
