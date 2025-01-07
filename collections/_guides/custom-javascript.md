---
layout: docs
title: Custom Scripts
description: How to add custom javascript to the Breeze-based theme.
order: 210
---

# Custom Scripts

* TOC
{:toc}

## General approach

You can add any custom js file to the Breeze theme using
[component registration](components#component-registration) approach.
Create `breeze_default.xml` layout update file with the following code inside:

```xml
<referenceBlock name="breeze.js">
  <arguments>
    <argument name="bundles" xsi:type="array">
      <item name="default" xsi:type="array">
        <item name="items" xsi:type="array">
          <item name="js-from-theme-folder" xsi:type="array">
            <item name="path" xsi:type="string">js/breeze/my-custom-file</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
          <item name="js-from-module-folder" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/my-custom-file</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
        </item>
      </item>
    </argument>
  </arguments>
</referenceBlock>
```

Keep one of `js-from-theme-folder` and `js-from-theme-folder` items depending on
your needs.

Create js file. If you use `js-from-theme-folder` item, the path is
`<theme>/web/js/breeze/my-custom-file.js`. Otherwise, the path is
`<module>/view/frontend/web/js/breeze/my-custom-file.js`.

## Theme customization script

This is the easiest way to add custom script to your theme. No need to create
layout update file.

> Make sure to [create and change](child-theme) your theme to `Local/breeze-custom`
> before start.

There are two built-in entry points for custom scripts in Breeze theme:

 -  `extend.js` --- Use this file if you are custom theme developer.
 -  `custom.js` --- Use this file if you are end-user of the custom theme.

Create `[extend|custom].js` file in `Local/breeze-custom/web/js/breeze` folder.
This file will be included automatically at all pages.

Example:

```js
(function () {
    'use strict';

    $(document).on('breeze:load', function () {
        console.log('Hello');
    });
})();
```

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── web/
│   └── js/
│       └── breeze/
│           ├── custom.js
│           └── extend.js
├── composer.json
├── registration.php
└── theme.xml
```

## Miscellaneous HTML

Magento provides two entry points to add your custom HTML code:

 -  Content > Configuration > Head --- scripts added here will be processed once 
    per turbo session. This is useful to import third-party library.
 -  Content > Configuration > Footer --- scripts added here will be processed on 
    every page. This is useful to call some method on every page.

> Breeze provides lazy script evaluation feature. We recommend to use it
> when importing third-party service script.

Example:

```html
<script type="lazy">
    console.log('hello');
</script>
```
