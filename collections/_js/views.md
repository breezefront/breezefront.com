---
layout: default
title: Views
description: Creating a View Component in Breeze
order: 400
---

# Views

* TOC
{:toc}

## About

View --- is a replacement for Magento uiComponent. Since uiComponents are
not used actively across Magento frontend (except cart and checkout pages), we
made a very basic view implementation. In fact, we just added `ko.applyBindings`
on top of Widget Component, and that is everything we need to get most of
frontend functionality.

Before we start you'll need to know about two important View component limitations
comparing with uiComponent:

 -  Knockout-based template is taken directly from DOM structure. No RequireJs loads.
    This means you'll need to [pre-render `html` template](#rendering-html-template)
    using xml layout update instructions.
 -  Custom elements like `<each/>`, `<render/>`, `<if/>`, `<text/>` are not
    supported. This means that you need to rewrite your template using standard
    knockoutjs syntax.

## $.view function

`$.view` --- is a complete `$.widget` analogue:

```js
$.view('name', {});
```

Please take a look at the [Widget page](/widgets) first. Since `$.view` and View
Components have the same abilities as `$.widget` and Widget Components we will not
repeat the same parts, but focus on differences.

## Declaration Example

View declaration is identical to Widget:


```js
$.view('viewName', 'parentViewName', {
    component: 'Vendor_Module/js/component',

    defaults: {
        template: 'Vendor_Module/template',
        cart: $.sections.get('cart'),
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
```

The only difference is how the `template` property will be processed.
View component will replace all slashes `/` from it with `_`, and then will ask
KnockoutJS to [render template](#rendering-html-template) with such ID.

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

Take a look at the View Component example below. If you have worked with
uiComponents in Magento previously, you'll notice that they are very similar:

```js
// Breeze-based view component
$.view('name', {
    defaults: {
        template: 'Vendor_Module/template'
    }
});

// Luma-based uiComponent
Component.extend({
    defaults: {
        template: 'Vendor_Module/template'
    }
});
```

However, there is a one difference between these two examples. The first one will
not work out-of-the box. It will throw the following exception:

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
