---
layout: default
title: Custom Fonts
description: How to add custom font in Breeze-based theme.
order: 220
---

# Custom fonts

* TOC
{:toc}

> Make sure to [create and change](/child-theme) your theme to `Local/breeze-custom`
> before start.

We'll be using Inter font by Rasmus Andersson, taken from
[fonts.google.com](https://fonts.google.com/specimen/Inter), but this guide is applicable to
any other font source.

## Adding custom font

There are multiple ways to add a custom font to the Magento store. We recommend
using [local fonts](#adding-local-font-using-font-face-rule), as it's a most
performant way.

### Adding remote font using head `<link>` tag

Google suggests to add the following links to the head section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Let's do this!

Create `Local/breeze-custom/Magento_Theme/layout/breeze_default.xml` with the
following content:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="head.additional">
            <block name="custom_fonts" class="Magento\Framework\View\Element\Text">
                <arguments>
                    <argument name="text" xsi:type="string"><![CDATA[
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
                    ]]></argument>
                </arguments>
            </block>
        </referenceBlock>
    </body>
</page>
```

> We'll improve this code in future, when the [crossorigin PR](https://github.com/magento/magento2/pull/32455)
> will be merged into Magento sources.

That's all. Save the file and clear the cache. Now,
[jump to the next section](#applying-added-font-to-the-selected-elements)
and apply new font to your site!

### Adding remote font using CSS `@import` rule

Google suggests to add the following rule to our CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
```

Since our [custom theme](/child-theme) already has a [Local/breeze-custom/web/css/_custom.less](/custom-styles),
all we need is to copy-paste this code into our CSS file.

That's all. Head over [to the next section](#applying-added-font-to-the-selected-elements)
and apply new font to your site!

### Adding local font using `@font-face` rule

 1. Put your fonts into the `Local/breeze-custom/web/fonts` folder.
 2. Now, we need to add `@font-face` declarations at the beginning of
    [Local/breeze-custom/web/css/_custom.less](/custom-styles) file:

    > We recommend using `@import` statements to split your CSS into logical parts.

    ```scss
    & when (@critical) {
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(../fonts/Inter.woff2) format('woff2');
        }
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(../fonts/Inter.woff2) format('woff2');
        }
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(../fonts/Inter.woff2) format('woff2');
        }
    }
    ```

 3. Let's add font preload for better site performance. Create
    `Local/breeze-custom/Magento_Theme/layout/breeze_default.xml` with the following
    content:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <head>
            <link rel="preload" src_type="url" src="fonts/Inter.woff2"/>
        </head>
    </page>
    ```

 4. That's all. Head over [to the next section](#applying-added-font-to-the-selected-elements)
    and apply new font to your site!

## Applying added font to the selected elements

Open your [Local/breeze-custom/web/css/_custom.less](/custom-styles) and add
the following code to activate the new font:

```scss
// apply new font for all texts:
@base__font-family: 'Inter', sans-serif;

// or, apply new font for all block titles:
@block-title__font-family: 'Inter', sans-serif;

// or, all hero block titles:
@hero-block-title__font-family: 'Inter', sans-serif;

// or, buttons:
@button__font-family: 'Inter', sans-serif;

// or, anything else:
& when (@critical) {
    h1 {
        font-family: 'Inter', sans-serif;
    }
}
```
