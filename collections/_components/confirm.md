---
layout: docs
title: Confirm
description: Modal component to ask confirmation question
---

# Confirm

* TOC
{:toc}

## About

Confirm --- is a subclass of [Modal component](modal) with pre-configured buttons
and autoOpen/autoRemove behavior.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/ui/confirm.js){:target="_blank" rel="noopener"}

## Initialization

```js
$.confirm({
    title: $t('Question'),
    content: $t('Are you sure?'),
    actions: {
        confirm: () => alert('Confirmed'),
        cancel: () => alert('Rejected')
    }
});
```

## Options

Here is a list of confirm options:

```js
$.confirm({
    title: $t('Title'),
    content: $t('Content'),
    modalClass: 'confirm',
    focus: '.action-accept',
    actions: {
        always: function () {},
        confirm: function () {},
        cancel: function () {}
    },
    buttons: [{
        text: $t('Cancel'),
        class: 'action-secondary action-dismiss',
        click: function (event) {...}
    }, {
        text: $t('OK'),
        class: 'action-primary action-accept',
        click: function (event) {...}
    }]
});
```

## Methods

Here is a list of available confirm methods:

```js
$(el).confirm('setTitle', 'title');
$(el).confirm('closeModal');
```

You can also get the confirm instance using `instance` method and call the
methods directly:

```js
var confirm = $(el).confirm('instance');

confirm.setTitle('title');
confirm.openModal();
```

## Events

Here is a list of event listeners for modal events:

```js
$(document).on('confirm:beforeCreate', (e, data) => {});
$(document).on('confirm:afterCreate', (e, data) => {});
$(document).on('confirm:opened', (e, data) => {});
$(document).on('confirm:closed', (e, data) => {});
```

Each listener receives `event` and `data` objects. Data object has `instance`
property that refers to confirm widget that triggered the event.

## Styles

Alert component fully reuse [Modal styles](modal#styles).
