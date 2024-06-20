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

Additionally, you can add your own `my-theme-js.js` using `breeze_default.xml` layout
update:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="js/breeze/my-theme-js" xsi:type="array">
            <item name="path" xsi:type="string">js/breeze/my-theme-js</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

## Module entry points

You should register module components using `breeze_default.xml` layout update
as described in [JS Components](components) section:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/name" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/name</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

Now, Breeze will load `Vendor_Module/js/name` if it will be used in
`data-mage-init`, `x-magento-init`, or inline `require` call.

Sometimes you may want to load js file even when it's not used in `data-mage-init`
attributes, `x-magento-init` scripts, or `require` calls. In Luma, these types
of files are usually loaded via `deps` directive in `requirejs-config.js`.
In Breeze you need to set the `autoload` property instead:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="Vendor_Module/js/name" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/name</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```
