---
layout: docs
title: Alert
description: Modal component to show important messages
---

# Alert

* TOC
{:toc}

## About

Alert --- is a subclass of [Modal component](modal) with pre-configured buttons
and autoOpen/autoRemove behavior.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/ui/alert.js){:target="_blank" rel="noopener"}

## Initialization

```js
$.alert({
    title: $t('Title'),
    content: $t('Content')
});
```

## Options

Here is a list of alert options:

```js
$.alert({
    title: $t('Title'),
    content: $t('Content'),
    modalClass: 'alert',
    focus: '.action-accept',
    buttons: [{
        text: $t('OK'),
        class: 'action-primary action-accept',
        click: function (event) {...}
    }]
});
```

## Methods

Here is a list of available alert methods:

```js
$(el).alert('setTitle', 'title');
$(el).alert('closeModal');
```

You can also get the alert instance using `instance` method and call the
methods directly:

```js
var modal = $(el).alert('instance');

modal.setTitle('title');
modal.openModal();
```

## Events

Here is a list of event listeners for modal events:

```js
$(document).on('alert:beforeCreate', (e, data) => {});
$(document).on('alert:afterCreate', (e, data) => {});
$(document).on('alert:opened', (e, data) => {});
$(document).on('alert:closed', (e, data) => {});
```

Each listener receives `event` and `data` objects. Data object has `instance`
property that refers to alert widget that triggered the event.

## Styles

Alert component fully reuse [Modal styles](modal#styles).
