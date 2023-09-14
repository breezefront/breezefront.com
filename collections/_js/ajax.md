---
layout: docs
title: Ajax
description: Ajax requests in Breeze themes
order: 460
---

# Ajax requests

* TOC
{:toc}

## About

Breeze provides a wrapper around `fetch` function to make requests in jQuery-like API.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/core/request.js){:target="_blank" rel="noopener"}

## Sending request

```js
$.ajax(url|options);
$.ajax(url|options, options|successFn);
$.get(url|options, options|successFn);
$.post(url|options, options|successFn);
```

## Options

Here is a list of available options:

```js
$.ajax({
    url: $.breeze.url.build('destination/url'),
    method: 'get|post|put|delete|head',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    data: Object|$('#myform'),
    success: (data, response) => {},
    complete: (response) => {},
    error: (response, error) => {},
});
```

You can pass other options that are the [part of `fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

 -  **headers** --- key-value pairs of the headers to pass in request.
    Additionally, you can unset default headers using the nulls:

    ```js
    headers: {
        'X-Requested-With': null
    }
    ```

 -  **data** --- object with data to send. You can also pass the form element
    and Breeze will submit its data automatically.
 -  **success** --- function to execute after success response was received.
    First argument of the function is a json object or plain text. The second one
    is a response object.
 -  **complete** --- function to execute after response was received.
 -  **error** --- function to execute after unsuccessful request. First argument
    is a response object. It may be undefined is request was aborted by client.
    The second one is an error object.

## Aborting request

Ajax function returns a `Promise` with custom `abort` method. Use it to abort
unfinished request:

```js
var promise = $.get(url, {
    error: function (response, error) {
        // response is undefined when request is aborted
        console.log(error);
    }
});

promise.abort();
```
