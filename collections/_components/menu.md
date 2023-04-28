---
layout: docs
title: Menu
description: Menu customization
---

# Menu

* TOC
{:toc}

## About

Menu --- is a [JS widget](widgets) component. By default menu is located in a separate
container right after the header. You can [move the menu](#layout-update) inside
the header right after logo or below whole header content.

Source code:

 - [menu.js](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/menu.js){:target="_blank" rel="noopener"}

## Initialization

```js
$('.selector').menu();
```

## Options

```js
$('.selector').menu({
    menus: 'ul',
    dropdown: 'ul',
    useInlineDisplay: true,
    responsive: true,
    expanded: false,
    dropdownShowDelay: 100,
    dropdownHideDelay: 120,
    slideoutShowDelay: 42,
    slideoutHideDelay: 300
});
```

## Methods

```js
var menu = $(el).menu('instance');

menu.open(dropdown);
menu.close(dropdown);

menu.openNavbar();
menu.closeNavbar();

menu.toggleDesktopMode();
menu.toggleMobileMode();
```

## Events

```js
// Mobile slideout events:
$(document).on('navBeforeOpen', (e, data) => {});
$(document).on('navAfterOpen', (e, data) => {});
$(document).on('navBeforeClose', (e, data) => {});
$(document).on('navAfterClose', (e, data) => {});

// Responsive events
$(document).on('afterToggleDesktopMode', (e, data) => {});
$(document).on('afterToggleMobileMode', (e, data) => {});

// Dropdown events
$(document).on('beforeOpen', (e, data) => {});
$(document).on('beforeClose', (e, data) => {});
$(document).on('afterClose', (e, data) => {});
```

## Styles

```scss
@navigation__text-color: false;
@navigation__media-desktop: @media-sm;
@navigation__media-mobile: @media-sm-down;
@navigation__media-wrap: ~"(min-width: @{sm}) and (max-width: @{md-max})";

@navigation-item-level0__font-family: false;
@navigation-item-level0__font-weight: false;
@navigation-item-level0__font-size: false;
@navigation-item-level0__letter-spacing: false;
@navigation-item-level0__text-transform: false;
@navigation-item-level0__text-shadow: false;
@navigation-item-level0__padding: false;
@navigation-item-level0__opened__color: false;
@navigation-item-level0__opened__background: @dropdown-item__hover__background;
@navigation-item-level0__active__color: false;
@navigation-item-level0__active__background: @dropdown-item__hover__background;

@navigation-item__opened__background: @dropdown-item__hover__background;

@navigation-caret__right: @0-5;
@navigation-caret__opacity: false;
@navigation-caret-level0__padding: false;
@navigation-caret-level0__right: false;

@navigation-dropdown__border-color: @dropdown__border-color;
@navigation-dropdown__border: false;
```

## Layout update

```xml
<!-- Move menu right after the logo -->
<move element="navigation.wrapper" destination="header-wrapper" after="logo"/>

<!-- Move menu inside header, after all content -->
<move element="navigation.wrapper" destination="header.container"/>
```
