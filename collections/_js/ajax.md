---
layout: docs
title: Ajax
description: Ajax requests in Breeze themes
order: 460
---

# Ajax requests

Breeze provides a wrapper to make modern fetch requests in jQuery-like API.

Source code:

 - [request.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/core/request.js){:target="_blank" rel="noopener"}

```js
var promise = $.ajax(url, {
    method: 'get',
    data: data,
    success: callback,
    complete: callback,
    error: callback
});

$.ajax(url, callback);

var promise = $.get(url, {
    data: data,
    success: callback,
    complete: callback,
    error: callback
});

var promise = $.post(url, {
    data: data,
    success: callback,
    complete: callback,
    error: callback
});
```
