---
layout: docs
title: Globals
description: Global JS variables in Breeze
order: 100
---

# Globals

* TOC
{:toc}

## About

Since Breeze doesn't use modern JS techniques to load js dependencies, you will
work with global js variables. For the sake of simplicity, most of globals declared
under `$` scope:

Variable            | Description
--------------------|----------------
`_`                 | [Underscore library](#underscore)
`$()`               | [Cash library](#cash)
`$.storage`         | [Local storage manager](#local-storage)
`$.cookies`         | [Cookie manager](#cookies)
`$.sections`        | [Section/Customer data](#customer-data)
`$.async()`         | [DOM watcher tool](#async)
`$.translation`     | [Translation manager](#translate)
`$.lazy`            | [Lazy script](#lazy-script)
`$.Deferred`        | [Deferred function](#deferred)
`$t()`              | [Translate function](#translate)

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

## Local storage

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

## Customer data

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

`$.translation` --- is an object to work with js translations. There is shorthand
to the `$.translation.translate` method available: `$t`.

Usage examples:

```js
// get translated string
var translated = $t('Shopping Cart');

// Dynamically register translation for the 'key' phrase
$.translation.add('key', 'value');
// or
$.translation.add({
    'key': 'value'
});
```

## Lazy script

`$.lazy` --- is a function that will evaluate passed function after first user 
interaction. It's useful to postpone loading of not critical resources.
[Read more information](https://www.patterns.dev/posts/import-on-interaction){:target="_blank" rel="noopener"}.

Usage examples:

```js
$.lazy(function () {
    console.log('hello!');
});
```

Or, you can use `lazy` type attribute:

```html
<script type="lazy">
    console.log('hello!');
</script>
```

## Deferred

`$.Deferred` --- is a function that creates and returns a new deferred object.
It has a [jQuery-compatible API](https://api.jquery.com/jQuery.Deferred/){:target="_blank" rel="noopener"}.

Usage examples:

```js
var resolvedPromise = $.Deferred().resolve();

console.log(resolvedPromise.state());
```
