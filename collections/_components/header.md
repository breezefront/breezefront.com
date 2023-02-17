---
layout: docs
title: Header
description: Customizing header styles
---

# Header

* TOC
{:toc}

## About

Breeze header consists from 2 parts: top panel, and content. You can also
move the [Menu](menu) inside header. This is a common case when making a sticky
header.

## Main styles

```scss
@theme__brand-color: @blue-600;
@theme__dark-color: @slate-900;

@header__dark: false;
@header__border: false;
@header__border-width: false;
@header__background: false;
@header__box-shadow: false;
```

When `@header__dark` is set to `true`, Breeze will apply `@theme__dark-color`
as a background-color and invert text colors in the header.

## Top panel

### LESS variables

```scss
@theme__brand-color: @blue-600;
@theme__dark-color: @slate-900;

@header-panel__slideout: true;
@header-panel__dark: false;
@header-panel__background: false;
@header-panel__color: false;
@header-panel__border: false;
@header-panel__border-width: false;
```

When `@header-panel__dark` is set to `true`, Breeze will apply `@theme__dark-color`
as a background-color and invert text colors in the top panel.

### Info block

Info block is taken from the `header_panel_info` CMS block. We create this block
during installation.

```scss
@header-panel-info__margin: 0 auto 0 0;
@header-panel-info__padding: false;
@header-panel-info__font-weight: false;
@header-panel-info__font-size: false;
@header-panel-info__letter-spacing: false;
```

## Content section

### LESS variables

```scss
@header-content__padding-top: false;
@header-content__padding-bottom: false;
@header-content__background: false;
@header-content__position: relative;
```

### Actions

#### Layout update

```xml
<!-- Remove wishlist dropdown -->
<referenceBlock name="header.wishlist" remove="true"/>

<!-- Move account dropdown to top panel -->
<move element="header.account" destination="header.panel"/>
<referenceBlock name="header.account">
    <arguments>
        <argument name="label" xsi:type="string" translate="true">Account</argument>
        <argument name="sr_only" xsi:type="boolean">false</argument>
        <argument name="css_class" xsi:type="string">account-dropdown</argument>
    </arguments>
</referenceBlock>

<!-- Add new dropdown action -->
<referenceContainer name="header-wrapper">
    <block class="Swissup\Breeze\Block\Theme\Dropdown" name="header.custom-dropdown" after="header.account">
        <arguments>
            <argument name="title" xsi:type="string" translate="true">Dropdown</argument>
            <!-- <argument name="sr_only" xsi:type="boolean">true</argument> -->
            <!-- <argument name="icon" xsi:type="string"><![CDATA[<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>]]></argument> -->
            <!-- <argument name="css_class" xsi:type="string">no-chevron dropdown-lg</argument> -->
            <argument name="css_class" xsi:type="string">dropdown-lg</argument>
            <argument name="is_dialog" xsi:type="boolean">true</argument>
        </arguments>
        <block class="Magento\Cms\Block\Block" name="header.custom-dropdown.content">
            <arguments>
                <argument name="block_id" xsi:type="string">header_panel_info</argument>
            </arguments>
        </block>
    </block>
</referenceContainer>

<!-- Add new link action -->
<referenceContainer name="header-wrapper">
    <block class="Swissup\Breeze\Block\Theme\Dropdown" name="header.custom-link" after="header.account">
        <arguments>
            <argument name="title" xsi:type="string" translate="true">Link</argument>
            <argument name="sr_only" xsi:type="boolean">true</argument>
            <argument name="icon" xsi:type="string"><![CDATA[<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>]]></argument>
            <argument name="href" xsi:type="url" path="url"/>
            <argument name="css_class" xsi:type="string">no-chevron</argument>
        </arguments>
    </block>
</referenceContainer>
```

#### LESS variables

```scss
@header-actions__color: false;
@header-actions__font-weight: false;
@header-actions__gap: false;

@header-actions-icon__width: @6;
@header-actions-icon__height: @header-actions-icon__width;
@header-actions-icon__account: @icon-user-circle;
@header-actions-icon__wishlist: @icon-heart;
```
