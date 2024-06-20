---
layout: docs
title: Global Variables
description: Global JS variables in Breeze
order: 100
---

# Global Variables

* TOC
{:toc}

## About

Some functions and objects are registered in `window` namespace and available globally:

Variable            | Description
--------------------|----------------
`_`                 | [Underscore library](#underscore)
`$`                 | [Cash library](#cash)
`$.ajax|post|get`   | [Ajax request functions](#ajax)
`$.Deferred()`      | [Deferred function](#deferred)
`$.storage`         | [Local storage manager](#local-storage)
`$.cookies`         | [Cookie manager](#cookies)
`$.async()`         | [DOM watcher tool](#async)
`$.lazy()`          | [On interaction script](#on-interaction-script)
`$.onReveal()`      | [On reveal script](#on-reveal-script)

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

## Ajax

`$.ajax|$.post|$.get` --- are the functions for ajax requests with jQuery-like API.
See more on the [separate page](ajax).

## Deferred

`$.Deferred()` --- is a function that creates and returns a new deferred object.
It has a [jQuery-compatible API](https://api.jquery.com/jQuery.Deferred/){:target="_blank" rel="noopener"}.

Usage examples:

```js
var resolvedPromise = $.Deferred().resolve();

console.log(resolvedPromise.state());
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

## Async

`$.async` --- is a function that will execute passed function when selector is found in DOM structure.
It uses [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
under the hood.

Usage example:

```js
$.async('.selector', function (node) {
    //
});
```

## On interaction script

`$.lazy()` --- is a function that will execute passed function after first user
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

## On reveal script

`$.onReveal()` --- is a function that will execute passed function when passed element
appear in viewport area.

Usage examples:

```js
$.onReveal('.selector', function () {
    console.log('hello!');
});

$.onReveal('.selector', function (elements) {
    console.log('hello, we will appear soon!', elements);
}, {
    rootMargin: '150px'
});
```
