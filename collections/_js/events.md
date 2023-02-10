---
layout: docs
title: Events
description: The list of events dispatched by Breeze Frontend
order: 500
---

# Events

* TOC
{:toc}

## ajaxComplete

 -  `ajaxComplete` --- dispatched every time after `$.request` was used to send
    ajax request.

    Usage example:

    ```js
    $(document).on('ajaxComplete', function (event, data) {
        var response = data.response,
            request = data.response.req,
            body = response.body,
            url = request.url;
    });
    ```

## breeze:load

 -  `breeze:load` --- dispatched when page is loaded.

    > Do not use native `DOMContentLoaded` event as it doesn't work in a way
    > as you may expect when [Turbo mode](/settings) in enabled.

    Usage Example:

    ```js
    $(document).on('breeze:load', function () {
        initFormKey();
    });
    ```

## breeze:mount

 -  `breeze:mount` --- dispatched every time before component initialization.

    Usage example:

    ```js
    $(document).on('breeze:mount', function (event, data) {
        console.log(data.__component);
        console.log(data.el);
        console.log(data.settings);
    });
    ```

 -  `breeze:mount:<Component/alias>` --- same as above, but for specific component.

    Usage example:

    ```js
    $(document).on('breeze:mount:dropdown', function (event, data) {
        console.log(data);
    });
    ```

## breeze:resize

> `breeze:resize` events are the debounced versions of `$(window).on('resize')` listener.

 -  `breeze:resize` --- dispatches every time after viewport changes its dimensions.
 -  `breeze:resize-x` --- dispatches every time after viewport changes its horizontal dimensions.
 -  `breeze:resize-y` --- dispatches every time after viewport changes its vertical dimensions.

Usage example:

```js
$(document).on('breeze:resize', function (event, data) {
    console.log(data.oldDimensions);
    console.log(data.newDimensions);
});
```

## contentUpdated

 -  `contentUpdated` --- You'll want to trigger this event every time the
    portion of HTML content is updated and new components should be initialized.

    Usage example:

    ```js
    $.request.get({
        url: 'url',
        type: 'html'
    }).then(function (response) {
        $('selector')
            .append(response.text)
            .trigger('contentUpdated');
    });
    ```

## validateAfter

 -  `validateAfter` --- dispatched after form validation. Useful to add additional
    validation/messages,

    Usage example:

    ```js
    $(document).on('validateAfter', function (event, data) {
        console.log(data.result);
    });
    ```
