---
layout: docs
title: UI Components
description: Creating a UI Component in Breeze
order: 400
redirect_from: /docs/views
---

# UI Components

* TOC
{:toc}

## Declaration Example

Component declaration is identical to the Luma, except you must add `component`
property:

```js
define([
    'knockout',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], (ko, Component, customerData) => {
    'use strict';

    Component.extend({
        component: 'Vendor_Module/js/component',

        defaults: {
            template: 'Vendor_Module/template',
            cart: customerData.get('cart'),
            isLoading: ko.observable(false),
        },

        create: function () {
            this.cartSubscription = this.cart.subscribe(function (updatedCart) {
                self.isLoading(false);
            });
        },

        destroy: function () {
            this._super();
            this.cartSubscription.dispose();
        }
    });
});
```

## Methods

### beforeRender

A method called right before the template will be rendered. You can return `false`
to prevent rendering:

```js
beforeRender: function () {
    return false;
}
```

### afterRender

A method called after the template will be rendered.

```js
afterRender: function () {
    // do some awesomeness here
}
```

## Events

### contentUpdated

The `contentUpdated` event is dispatched right after content was rendered.

> Please note, that this event is not prefixed with view name.

Usage example:

```js
$(el).on('contentUpdated', function (event) {
    //
});
```
