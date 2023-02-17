---
layout: docs
title: Dropdown
description: Customizing dropdown styles
---

# Dropdown

* TOC
{:toc}

## About

Dropdown --- is a [JS widget](widgets) component that shows dropdown content
below trigger.

Source code:

 - [dropdown.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/ui/dropdown.js){:target="_blank" rel="noopener"}

## Initialization

XML layout update initialization:

```xml
<!-- Icon dropdown -->
<block class="Swissup\Breeze\Block\Theme\Dropdown" name="custom-dropdown">
    <arguments>
        <argument name="title" xsi:type="string" translate="true">Dropdown</argument>
        <!-- <argument name="sr_only" xsi:type="boolean">true</argument> -->
        <!-- <argument name="icon" xsi:type="string"><![CDATA[<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>]]></argument> -->
        <!-- <argument name="css_class" xsi:type="string">no-chevron dropdown-lg</argument> -->
        <argument name="css_class" xsi:type="string">dropdown-lg</argument>
        <argument name="is_dialog" xsi:type="boolean">true</argument>
    </arguments>
    <block class="Magento\Cms\Block\Block" name="custom-dropdown.content">
        <arguments>
            <argument name="block_id" xsi:type="string">header_panel_info</argument>
        </arguments>
    </block>
</block>
```

We use initialization via XML layout for [header actions](header#layout-update).

HTML initialization:

```html
<div class="actions dropdown options switcher-options" style="display:inline-block">
    <div class="action toggle switcher-trigger" data-mage-init='{"dropdown":{"dialog":true}}'>
        <strong><span>Title</span></strong>
    </div>
    <div class="dropdown switcher-dropdown" data-target="dropdown">
        Content
    </div>
</div>
```

JS initialization:

```js
$('.selector').dropdown();
```

## Options

```js
$('.selector').dropdown({
    parent: null,
    activeClass: 'active',
    dialog: false, // if true - do not close dropdown when clicking inside
    menu: '[data-target="dropdown"]'
});
```

## Methods

```js
var dropdown = $(el).dropdown('instance');

dropdown.open();
dropdown.close();
dropdown.toggle();
```

## Events

```js
$(document).on('beforeOpen', (e, data) => {});
$(document).on('beforeClose', (e, data) => {});
```

## Styles

```scss
@dropdown__border-color: @divider__color;
@dropdown__border: 1px solid @dropdown__border-color;
@dropdown__border-radius: false;
@dropdown__shadow: @shadow-lg;

@dropdown-item__border-radius: @dropdown__border-radius;
@dropdown-item__padding: @1 @2;
@dropdown-item__hover__color: false;
@dropdown-item__hover__background: @divider__color;
@dropdown-item__hover__background-alpha: .05;
```
