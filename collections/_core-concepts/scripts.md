---
layout: docs
title: Scripts
description: Breeze scripts
order: 400
---

# Scripts

* TOC
{:toc}

## About

Breeze JS inherits its concepts from Luma-based themes. We support `data-mage-init`
attribute, `x-magento-init` scripts, we have jQuery-like widgets, basic uiComponents
replacement, and mixins. All of this preserves the same level of flexibility
as you had in Luma themes.

## Theme entry points

Breeze provides ready-to-use JS entry points for theme development. Just create
one of the following files inside your custom theme, and it will be automatically
loaded on all pages:

```
<theme_dir>/
└── web/
    └── js/
        └── breeze/
            ├── custom.js
            └── extend.js
```

 - Use `extend.js` file if you are the custom theme developer.
 - Use `custom.js` file if you are the Breeze theme end-user.

Additionally, you can add your own `my-theme.js` using `breeze_default.xml` layout
update:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="js/breeze/my-theme" xsi:type="array">
            <item name="path" xsi:type="string">js/breeze/my-theme</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

## Module entry points

We recommend enabling Better Compatibility mode for your module. Doing
so will make all your Luma-based JS files work out of the box:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceBlock name="breeze.js">
      <arguments>
        <argument name="better_compatibility" xsi:type="array">
          <item name="Vendor_Module" xsi:type="boolean">true</item>
        </argument>
      </arguments>
    </referenceBlock>
  </body>
</page>
```

See the [Integration Example](integration-example) page for more details about
third-party modules and Breeze.
