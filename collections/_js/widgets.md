---
layout: default
title: Widgets
description: Creating a Widget Component in Breeze
order: 300
---

# Widgets

Widget --- is the main interface to create JS Component. Breeze widgets are very
similar to Luma's jQuery UI based widgets.

* TOC
{:toc}

## $.widget function

`$.widget` --- is a function that is usually used to declare a new widget:

```js
$.widget('name', {});
```

However, you can also retrieve all widget instances using this function:

```js
// iterate over all instances
$.widget('name').each(function (widget) {
    console.log(widget);
});

// call for specified method in all instances
$.widget('name').invoke('close');

// destroy all instances
$.widget('name').destroy();
```

## Declaration

There are three main parts in widget declaration:

 -  `$.widget` function call
 -  Widget name --- The name is used for event names and to work with
    widget [programmatically](/components#programmatic-usage).
 -  Object with methods and properties --- A prototype to use when creating
    widget instance.

```js
$.widget('name', {});
```

Sometimes you'll want to create a widget as a child of some built-in widget. In
this case parent name should be added to the declaration:

```js
$.widget('name', 'parentName', {});
```

Prototype object is usually consist from:

 -  `component` string --- Component alias to search in DOM structure. Used to automatically
    initialize component. View details about [Component Initialization](components#component-initialization).
 -  `options` object --- Default component options.
 -  `create` method --- Main entry point where you want to place component's logic.
 -  `destroy` method --- A place to undo all work made during component's lifecycle.

### Example

Let's start with full-featured widget declaration that uses most of available
built-in properties and methods, and then review each peace of code.


```js
$.widget('widgetName', 'parentWidgetName', {
    component: 'Vendor_Module/js/component',

    options: {
        activeClass: 'shown',
        template: '...'
    },

    create: function () {
        this.popup = $(this.options.template).appendTo(document.body);
        this.focusTrap = this.createFocusTrap(this.popup);

        this._on('click', this.open);
        this._on(this.popup, {
            'click .close': this.close
        });
    },

    destroy: function () {
        this._super();
        this.popup.remove();
    },

    open: function () {
        this.popup.one('transitionend', this.focusTrap.activate);
        this.popup.addClass(this.options.activeClass);
        this._trigger('opened');
    },

    close: function () {
        this.focusTrap.deactivate();
        this.popup.removeClass(this.options.activeClass);
        this._trigger('closed');
    }
});
```

## Properties

### component

The `component` property makes your component automatically mounted during
page load. The value of this property is the alias of your component in the DOM
structure.

For example, when two components are declared in HTML markup as follows:

```html
<div data-mage-init='{"Vendor_Module/js/component": {}}'></div>
<div data-mage-init='{"dropdown": {}}'></div>
```

You should use the following corresponding values for `component` property:

```js
component: 'Vendor_Module/js/component'
component: 'dropdown'
```

> If you don't want to use `component` property, you'll need to create Widget manually
> using `breeze:mount` event listener:
>
> ```js
> $(document).on('breeze:mount:Vendor_Module/js/component', function (event, data) {
>     $(data.el).widgetName(data.settings);
> });
> ```

### options

Use `options` object to declare default settings for your component:

```js
options: {
    activeClass: 'shown',
    template: '...',
    nested: {
        key: value
    }
}
```

You can access these options inside your component directly (`this.options.activeClass`)
or using `_option` method:

```js
this._option('nested/key', 'defaultValue');
```

## Methods

### create

Component constructor. `this.element` and `this.options` are ready to use in this method.

```js
create: function () {
    this.popup = $(this.options.template).appendTo(document.body);
    this._on('click', this.open);
}
```

### init

Component initialization method. It's called once after `create` method,
and every time after constructor call on already initialized widget instance:

```js
// 1. create widget on element
$(el).widgetName();

// 2. call once again on the same element:
$(el).widgetName({});
```

On the example above, `create` method will be called once only, but `init`
will be called twice.

### destroy

Component destructor. It's called before the page unload event when
[Turbo mode](/settings) is enabled.
Since base Widget class has its own destroy logic you should call `this._super()`
inside your destroy method.

```js
destroy: function () {
    this._super();
    this.popup.remove();
}
```

Parent destructor automatically removes all event listeners added via `_on` method,
and deactivates `focusTrap` if it was used by the component.

### createFocusTrap

Useful when you need to lock the customer's focus inside popup or slideout
panel. This method creates a [focus-trap](https://github.com/focus-trap/focus-trap)
instance that you need to activate separately to lock the customer within specified
DOM node.

```js
// create focus-trap instance
this.focusTrap = this.createFocusTrap(this.popup);

// activate focus-trap
this.focusTrap.activate();

// deactivate focus-trap
this.focusTrap.deactivate();
```

> Please note, when trap element is animated, you should activate `focus-trap`
> **after** the element was animated:
>
> ```js
> this.popup.one('transitionend', this.focusTrap.activate);
> ```

### \_option

A method to get the value of specified option. Useful when option is nested deeply
and you want to get default value if option is not set. In the example below,
`defaulValue` will be returned if `this.options.nested.key` is not exist or
is `undefined`:

```js
this._option('nested/key', 'defaultValue');
```

### \_on

Attach event listeners to `this.element` or any other element. Prefer to use this
method because:

 -  All listeners added via `_on` will be automatically removed in `destroy` method.
 -  Breeze will bind `this` to the handler function automatically.

Listen to clicks on `this.element` and call `this.open` after each click:

```js
this._on('click', this.open);
```

Listen to clicks on all elements with `close` class name inside `this.popup` element:

```js
this._on(this.popup, {
    'click .close': this.close
});
```

### \_off

Remove event listeners from `this.element` or any other specified element:

```js
this._off('click'); // remove click listeners from this.element
this._off(); // remove all event listeners from this.element
this._off(this.popup, 'click');
```

### \_trigger

Manually dispatch specified event. Component namespace is added to the actual
dispatched event:

```js
this._trigger('opened');
```

And here is how you should add event listener for this event:

```js
$(el).on('widgetName:opened', function (event, data) {
    console.log(data.instance);
});
```

## Events

### beforeCreate

The `beforeCreate` event is dispatched right before `this.create` method is called.

Usage example:

```js
$(el).on('widgetName:beforeCreate', function (event, data) {
    console.log(data.instance);
    // we can do any additional logic here
    // or we can even change options inside data.instance!
});
```

### afterCreate

The `afterCreate` event is dispatched right after `this.create` method is called.

Usage example:

```js
$(el).on('widgetName:afterCreate', function (event, data) {
    data.instance.open();
});
```
