---
layout: docs
title: Recent Products
description: Recent products list customization
---

# Recent Products

* TOC
{:toc}

## About

Recent Products --- is a html/js component that shows recently viewed products.
Unlike default products lists, this block is rendered on client side using 
local storage data.

Source Code:

 - [Local storage](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/register-viewed-products.js){:target="_blank" rel="noopener"}
 - [Template](https://github.com/breezefront/module-breeze/blob/master/view/frontend/templates/catalog/recent-products.phtml){:target="_blank" rel="noopener"}
 - [JS component](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/recent-products.js){:target="_blank" rel="noopener"}

## Add custom data

When adding custom data to the Recent products block in Luma-based theme you 
have to create `Column` uiComponent. It may look like this:

```js
define(['Magento_Ui/js/grid/columns/column'], function (Column) {
   'use strict';

   return Column.extend({
       getValue: function (row) {
           return row.extension_attributes.custom_attribute;
       }
   });
});
```

The code above will not work in Breeze Frontend. Here is a Breeze-compatible
alternative:

```js
(function () {
    'use strict';

    $.mixin('recentProducts', {
        getAdditionalContent: function (original, row, element) {
            return row.extension_attributes.custom_attribute + original(row, element);
        }
    });
})();
```

You can put this code into your [custom.js file](custom-javascript).
