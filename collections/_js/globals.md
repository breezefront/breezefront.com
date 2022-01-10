---
layout: default
title: Globals
description: Global JS variables in Breeze
order: 100
---

# Globals

* TOC
{:toc}

Since Breeze doesn't use modern JS techniques to load js dependencies, you will
work with global js variables. For the sake of simplicity, most of globals declared
under `$` scope:

Variable            | Description
--------------------|----------------
`_`                 | [Underscore library](#underscore)
`$()`               | [Cash library](#cash)
`$.storage`         | [Local storage manager](#local-storage)
`$.cookies`         | [Cookie Manager](#cookies)
`$.sections`        | [Section/Customer Data](#customer-data)
`$.request`         | [Ajax requests tool](#ajax-requests)
`$.async()`         | [DOM watcher tool](#async)
`$.translation`     | [Translation manager](#translate)
`$.__()`            | [Translate function](#translate)
`$.widget()`        | [Widget constructor](#widgets-and-views)
`$.view()`          | [View constructor](#widgets-and-views)
`$.mixin()`         | [Mixin](#mixin)

## Underscore

[Underscore](https://underscorejs.org/) is a JavaScript library that provides
useful functional programming helpers:

```js
// find first even number
var value = _.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});

// render template
var string = _.template('hello: <%= name %>')({name: 'moe'});

// create throttled function
var throttled = _.throttle(updatePosition, 100);
```

## Cash

[Cash](https://github.com/fabiospampinato/cash) is a super small jQuery
alternative which provides:

 -  DOM query selector
 -  DOM manipulation
 -  Collection methods

Usage example:

```js
$('button.continue')
    .attr('id', 'next')
    .html('Next Step...')
    .on('click', function (event) {
        //
    });
```

## Local Storage

`$.storage` --- is a Breeze wrapper around `window.localStorage` that adds
namespaces support and a few additional methods.

Usage examples:

```js
// Simple storage
$.storage.set(key, value);
$.storage.get(key);
$.storage.remove(key|keys);

// Namespaced storage
var storage = $.storage.ns('vendor-module');
storage.set(key, value);
storage.get(key);
storage.keys();
storage.remove(key|keys);
storage.removeAll();
```

## Cookies

`$.cookies` --- is a wrapper around [JS Cookie](https://github.com/js-cookie/js-cookie)
library. Our wrapper adds ability to work with JSON data in cookies.

Usage examples:

```js
$.cookies.set(name, value);
$.cookies.get(name);
$.cookies.setJson(name, object);
$.cookies.getJson(name);
$.cookies.remove(name);
```

## Customer Data

`$.customerData` or `$.sections` --- is an object to work with Magento's dynamic
sections (Wishlist, Shopping Cart, Messages, etc).

Usage examples:

```js
$.sections.get(name);
$.sections.set(name, data);
$.sections.reload(names, forceNewSectionTimestamp);
$.sections.invalidate(names);
$.sections.getAffectedSections(url);
```

## Ajax requests

`$.request` --- is tool to work with ajax requests.

Usage examples:

```js
// GET request
$.request.get({
    url: 'url',
    type: 'html',
    success: callback,
    complete: callback,
    error: callback
});

// POST request
$.request.post({
    url: 'url',
    data: data,
    success: callback,
    complete: callback,
    error: callback
});
```

## Async

`$.async` --- is a handy function to watch for selector appearance in DOM structure.
It uses [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
under the hood.

Usage example:

```js
$.async('.selector', function (node) {
    //
});
```

## Translate

`$.translation` --- is an object to work with js translations. There is a shorthand
to the `$.translation.translate` method available: `$.__`.

Usage examples:

```js
// get translated string
var translated = $.translation.translate('Shopping Cart');
// or
var translated = $.__('Shopping Cart');

// Dynamically register translation for the 'key' phrase
$.translation.add('key', 'value');
// or
$.translation.add({
    'key': 'value'
});
```

## Widgets and Views

 -  `$.widget` --- is the function that registers Breeze Widget.
 -  `$.view` --- is the function that registers special Widget that has an
    additional ability to render reactive view (KnockoutJS is used under the hood).

```js
// Declare a widget that will be automatically created
// for each DOM node with data-mage-init='{"dropdown":{}}'
$.widget('dropdown', {
    component: 'dropdown',
    create: function () {},
    destroy: function () {}
});

// Declare a view that will be automatically created
// for each DOM node with
// data-mage-init='{"Vendor_Module/js/view/component":{}}'
$.view('cmpName', {
    component: 'Vendor_Module/js/view/component',
    create: function () {},
    destroy: function () {}
});
```

You can read more information about Widgets and Views at the separate pages:

 -  [Widget](/widgets)
 -  [View](/views)

## Mixin

`$.mixin` --- is the utility to extend or override standard component functionality.
You can use it to extend any Widget or View methods:

```js
$.mixin('dropdown', {
    destroy: function (original) {
        return original();
    }
});
```

You can also use mixin to completely disable any component:

```js
$.mixin('cmpName', {
    component: false
});
```
