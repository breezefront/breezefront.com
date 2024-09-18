---
layout: docs
title: Mixins
description: Overriding built-in Breeze components using mixins
order: 450
---

# Mixins

* TOC
{:toc}

## About

Mixin --- is a powerful feature that allows you to override or disable any built-in
or third-party Breeze component.

The syntax is:

```js
$.mixin('componentName|component', propsToExtend);
// Or
$.mixinSuper('componentName|component', propsToExtend);
```

 -  `componentName` -- is the name of component that you want to modify,
    or the component object itself.
 -  `propsToExtend` -- an object with methods to override.

The difference between `$.mixin` and `$.mixinSuper` is how you would call original
method from overriden. The first one will pass original method as the first argument
into overriden function. In the second example, parent method will be accessible via
`this._super()` function:

```js
$.mixin('collapsible', {
    someMethod: function (parent, ...) {
        parent();
    }
});

// Or

$.mixinSuper('collapsible', {
    someMethod: function (...) {
        this._super();
    }
});
```

## Example

> [Where to place my custom scripts?](custom-javascript)

When creating mixin, you need to set `mixins` property in `breeze_default.xml` file.
For example, if you are writing mixin for `collapsible` component, you must
register it:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="my-mixins" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/mixins-file</item>
            <item name="mixins" xsi:type="array">
              <item name="collapsible" xsi:type="string">collapsible</item>
            </item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

And here is the contents of `Vendor_Module/js/breeze/mixins-file`:

```js
$.mixin('collapsible', {
    create: function (parent) {
        parent();
    },

    someMethod: function (parent, arg1, arg2) {
        parent(arg1, arg2);
    }
});
```

You can also use mixin to disable component:

```js
$.mixin('quickSearch', {
    component: false
});
```
