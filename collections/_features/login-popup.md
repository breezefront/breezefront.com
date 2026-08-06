---
layout: docs
title: Login Popup
description: Login popup component
---

# Login Popup

* TOC
{:toc}

## About

Login popup allows you to login from any page of the store.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/authentication-popup.js){:target="_blank" rel="noopener"}

## Show login popup manually

By default login popup is shown when customer press "Proceed to checkout" button,
but due to store configuration or cart contents it's not possible to checkout as guest.

If you would like to show popup in other scenarios you need to write the following
js code:

```js
$('#authenticationPopup').authPopup('showModal')
```

Example:

```js
$(document).on('click', '.authorization-link', (event) => {
    event.preventDefault();
    $('#authenticationPopup').authPopup('showModal');
});
```
