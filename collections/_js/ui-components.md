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

## About

Since uiComponents are not used actively across Magento frontend (except cart and checkout pages), we
made a very basic uiComponent implementation. In fact, we just added `ko.applyBindings`
on top of Widget Component, and that is everything we need to get most of
frontend functionality.

Before we start you'll need to know about two important UI Component limitations
comparing with Luma:

 -  Knockout-based template is taken directly from DOM structure. No RequireJs loads.
    This means you'll need to [pre-render `html` template](#rendering-html-template)
    using xml layout update instructions.
 -  Custom elements like `<each/>`, `<render/>`, `<if/>`, `<text/>` are not
    supported. This means that you need to rewrite your template using standard
    KnockoutJS syntax.

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

Please note that `template` property will be processed in a different way.
Breeze will replace all slashes and dots with `_`, find the DOM element with
such ID and will use its contents as KnockoutJS template.
See [how to pre-render KnockoutJS template](#rendering-html-template).

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

## Rendering html template

Take a look at the UI Component example below. While they look the same in Luma,
there is a difference on how Breeze will process `template` option.

```js
Component.extend({
    defaults: {
        template: 'Vendor_Module/template'
    }
});
```

Breeze will throw the following exception if you try to create such component:

```
Cannot find template with ID Vendor_Module_template
```

To make it work, you need to render the template manually using `breeze_` prefixed
layout update. It may be `breeze_default.xml` to render template across all pages
or `breeze_catalog_product_view.xml` to render template on product page, and so on.

Breeze provides a special block that can render any template from `web/template`
folder. Here is an example of layout update that renders html template:

```xml
<referenceContainer name="breeze.container">
  <block class="Swissup\Breeze\Block\HtmlTemplate" name="module.Vendor_Module_template" template="Vendor_Module::template.html"/>
</referenceContainer>
```

 -  `breeze.container` --- is a container we use to hold all `html` templates.
 -  `name="module.Vendor_Module_template"` --- the part after last dot `.` is used for
    template ID in html output.
 -  `template="Vendor_Module::template.html"` --- path to the template inside
    `<Vendor_Module>/view/frontend/web/template` folder.

Sometimes you may need to pass specific template ID. Use the following code in such cases:

```xml
<referenceContainer name="breeze.container">
  <block class="Swissup\Breeze\Block\HtmlTemplate" template="Magento_GiftMessage::gift-message-form.html">
    <arguments>
      <argument name="id" xsi:type="string">Magento_GiftMessage/gift-message-form</argument>
    </arguments>
  </block>
</referenceContainer>
```
