---
layout: docs
title: Modal
description: Modal Component
# order: 700
---

# Modal

* TOC
{:toc}

## About

Modal --- is a [widget component](widgets) that shows popup over everything else
in the document and remove scroll from the `<body>` so that modal content scrolls
instead.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/ui/modal.js){:target="_blank" rel="noopener"}

## Initialization

Static HTML initialization:

```html
<button class="button primary modal-opener">Show popup</button>

<div style="display:none" data-mage-init='{
        "Magento_Ui/js/modal/modal": {
            "trigger": ".modal-opener"
        }
    }'>
    Modal content
</div>
```

JS initialization:

```js
$('.selector').modal();
$('.selector').modal('openModal');
```

## Options

Here is a list of modal options:

```js
$(el).modal({
    type: 'popup', // Choose between popup and slide modals
    title: '', // Modal title
    subTitle: '', // Modal subtitle
    modalClass: '', // Additional CSS class
    focus: '[data-role="closeBtn"]', // Initially focused element
    autoOpen: false, // Indicates if modal should be opened right after initialization
    appendTo: 'body', // Where to add modal in document markup
    trigger: '', // Element's selector that should trigger modal
    modalLeftMargin: 45, // Offset for nested slide modals
    closeText: $t('Close'), // Label for close button
    buttons: [{
        text: $t('Ok'),
        class: '',
        attr: {},
        click: function (event) {...}
    }],
    keyEventHandlers: {
        [enter|escape|..]Key: function (event) {}
    }
});
```

## Methods

Here is a list of available modal methods:

```js
$(el).modal('setTitle', 'title');
$(el).modal('setSubtitle', 'subtitle');
$(el).modal('toggleModal');
$(el).modal('openModal');
$(el).modal('closeModal');
```

You can also get the modal instance using `instance` method and call the
methods directly:

```js
var modal = $(el).modal('instance');

modal.setTitle('title');
modal.openModal();
```

## Events

Here is a list of event listeners for modal events:

```js
$(document).on('modal:beforeCreate', (e, data) => {});
$(document).on('modal:afterCreate', (e, data) => {});
$(document).on('modal:opened', (e, data) => {});
$(document).on('modal:closed', (e, data) => {});
```

Each listener receives `event` and `data` objects. Data object has `instance`
property that refers to modal widget that triggered the event.

## Styles

You can increase the size of your modal using `modalClass` option:

```js
$(el).modal({
    modalClass: 'modal-xl'
});
```

All other styling is available via CSS or LESS variables:

```scss
@z-layer__text-color: var(--base-color);
@z-layer__background-color: var(--base-bg);
@z-overlay__background-color: @black;
@modal__border-radius: false;
@modal__box-shadow: @shadow-xl-around;
```
