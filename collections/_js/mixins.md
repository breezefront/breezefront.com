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

The syntax is very simple:

```js
$.mixin('componentName', propsToExtend);
```

 - `componentName` -- is the name of component that you want to modify.
 - `propsToExtend` -- an object with methods to override.

## Example

> [Where to place my custom scripts?](/custom-javascript)

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
