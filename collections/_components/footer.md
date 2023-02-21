---
layout: docs
title: Footer
description: Customizing footer content and styles
---

# Footer

* TOC
{:toc}

## About

Breeze footer consists from 3 parts: top, middle, and bottom. By default the
middle part is used only. Proceed to the corresponding section to read how to add
content to every section and how to customize it using LESS variables.

## Main styles

```scss
@footer__dark: false;
@footer__background: false;
@footer__at-bottom: false;
```

When `@footer__dark` is set to `true`, Breeze will apply `@theme__dark-color`
as a background-color and invert text colors in the footer.

## Top section

### Layout update

```xml
<!-- Add new content to the top section: -->
<referenceContainer name="footer-top">
    <block class="Magento\Cms\Block\Block" name="footer_content" before="-">
        <arguments>
            <argument name="block_id" xsi:type="string">cms_block_id</argument>
        </arguments>
    </block>
</referenceContainer>
```

### LESS variables

```scss
@footer-top__dark: false;
@footer-top__padding: false;
@footer-top__margin: false;
@footer-top__background: false;
```

## Middle section

### Layout update

```xml
<!-- Add new content to the middle section: -->
<referenceContainer name="footer-middle">
    <block class="Magento\Cms\Block\Block" name="footer_content" before="-">
        <arguments>
            <argument name="block_id" xsi:type="string">cms_block_id</argument>
        </arguments>
    </block>
</referenceContainer>

<!-- Move default content to the bottom: -->
<move element="footer" destination="footer-bottom"/>

<!-- Remove Newsletter block -->
<referenceBlock name="form.subscribe" remove="true"/>
```

### LESS variables

```scss
@footer-middle__dark: false;
@footer-middle__padding: false;
@footer-middle__margin: false;
@footer-middle__background: false;
```

## Bottom section

### Layout update

```xml
<!-- Add new content to the bottom section: -->
<referenceContainer name="footer-bottom">
    <block class="Magento\Cms\Block\Block" name="footer_content" before="-">
        <arguments>
            <argument name="block_id" xsi:type="string">cms_block_id</argument>
        </arguments>
    </block>
</referenceContainer>
```

### LESS variables

```scss
@footer-bottom__dark: false;
@footer-bottom__padding: false;
@footer-bottom__margin: false;
@footer-bottom__background: false;
```

## Newsletter block

### Layout update

```xml
<!-- Move newsletter to the top -->
<move element="form.subscribe" destination="footer-top" before="-"/>

<!-- Remove newsletter -->
<referenceBlock name="form.subscribe" remove="true"/>
```

### LESS variables

```scss
@footer-newsletter__background: false;
@footer-newsletter__margin: 0 0 @4;
@footer-newsletter__padding: false;
@footer-newsletter-title__mode: hidden; // hidden|hero|false
@footer-newsletter-form__max-width: 420px;
@footer-newsletter-form__margin: 0 auto;
@footer-newsletter-form__flex-wrap: wrap;
@footer-newsletter-form__justify-content: center;
@footer-newsletter-input-icon: false;
@footer-newsletter-input-icon__width: @6;
@footer-newsletter-input-icon__height: @6;
@footer-newsletter-input-icon__left: @2;
@footer-newsletter-input-icon__top: @2-5;
@footer-newsletter-input__border-color: false;
@footer-newsletter-input__background-color: false;
```

## Content section

```scss
@footer-content__text-align: center;
@footer-content__padding-top: @8;
@footer-content__padding-bottom: false;
@footer-content__background: false;
```

## Footer links

```scss
@footer-links__gap: @2;
@footer-links__margin: false;
```
