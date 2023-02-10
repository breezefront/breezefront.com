---
layout: docs
title: Integration Tips
description: >
    How to integrate existing Luma-based module and theme with Breeze frontend
order: 600
---

# Integration Tips

* TOC
{:toc}

## About

On this page, you’ll find integration tips and common issues you may have to solve
trying to run your module or theme on a Breeze frontend.

## Migrate requirejs config

Requirejs config file may have the following entries that you need to migrate to
Breeze:

```js
var config = {
    config: {
        mixins: {
            'mage/storage': {
                'js/mixin': true
            }
        }
    },
    map: {
        '*': {
            'component': 'Vendor_Module/js/component'
        }
    },
    deps: [
        'js/script'
    ]
};
```

 -  `deps` &mdash; [Add custom js file](#add-custom-js-file)
 -  `mixins` &mdash; [Migrate mixins](#migrate-mixins)
 -  `map` &mdash; [Migrate widgets](#migrate-widgets), 
    [uiComponents](#migrate-uicomponents),
    [functions](#migrate-functions),
    [objects](#migrate-objects).

## Add custom js file

Use `breeze_default.xml` layout update to add new js file:

```xml
<referenceBlock name="breeze.js">
    <arguments>
        <argument name="bundles" xsi:type="array">
            <item name="default" xsi:type="array">
                <item name="items" xsi:type="array">
                    <!-- Adding file from custom module -->
                    <item name="module-js-file" xsi:type="string">Vendor_Module/js/breeze/new-js-file</item>

                    <!-- Adding file from custom theme -->
                    <item name="theme-js-file" xsi:type="string">js/breeze/new-js-file</item>
                </item>
            </item>
        </argument>
    </arguments>
</referenceBlock>
```

> Read more about [bundles and component registration](components#component-registration).

## Migrate module CSS

Breeze theme doesn't include `_module.less` into the styles. You'll need to
create `web/css/breeze/_default.less` in your module with styles for the
Breeze Theme.

<details markdown=1><summary markdown="span">It's still possible to reuse your `_module.less` in Breeze Theme:</summary>

 1. Add `@import` instruction into your new `web/css/breeze/_default.less` file:

    ```scss
    @import '../source/_module.less';
    ```

 2. Declare `@critical` variable in your existing `source/_module.less` to
    prevent error in Luma theme:

    ```scss
    @critical: unsure;
    ```

 3. Wrap your styles into `@critical` guards:

    ```diff
     & when (@media-common = true) {
    +& when (@critical = unsure), (@critical) {
         .selector {
             //
         }
    +}
    +& when (@critical = unsure), (@critical = false) {
         .selector:hover {
             //
         }
    +}
     }

     .media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
    +& when (@critical = unsure), (@critical) {
         .selector {
             //
         }
    +}
     }
    ```

 4. This step is optional. Add missing variables to `web/css/breeze/_default.less`.
    For example, if your styles use `@font-weight__semibold` variable and it's not
    available in Breeze theme:

    ```scss
    @import '../source/_module.less';
    @font-weight__semibold: 400;
    ```
</details>

## Migrate mixins

Let's assume you have the following code that works on Luma theme:

```js
// requirejs-config.js
mixins: {
    'component': {
        'Vendor_Module/js/mixin': true
    }
}
```
{:.chained}

```js
// mixin.js
define(['mage/utils/wrapper'], function (wrapper) {
    return function (target) {
        target.method = wrapper.wrap(target.method, function () {
            //
        });
        return target;
    };
});
```

Here is a Breeze equivalent added to [new js file](#add-custom-js-file):

```js
$.mixin('component', {
    method: function (original, arg) {
        console.log('Mixin!');
    }
});
```

## Migrate widgets

Let's assume you have the following code that works on Luma theme:

```html
<!-- template.phtml -->
<div data-mage-init='{"Vendor_Module/js/widget": {}}'></div>
```
{:.chained}

```js
// widget.js
define(['jquery', 'jquery-ui-modules/widget'], function($) {
    $.widget('widgetName', {
        _create: function() {}
    });
});
```

Here is a Breeze equivalent added to [new js file](#add-custom-js-file):

```js
$.widget('widgetName', {
    component: 'Vendor_Module/js/widget',
    create: function() {
        console.log('Widget Created!');
    }
});
```

Or, you can [reuse the same Luma-based file](#reusing-luma-files)!

## Migrate uiComponents

Let's assume you have the following code that works on Luma theme:

```js
// requirejs-config.js
map: {
    '*': {
        'simpleComponent': 'Vendor_Module/js/component'
    }
}
```
{:.chained}

```html
<!-- template.phtml -->
<div data-mage-init='{"simpleComponent": {}}'></div>
```
{:.chained}

```js
// component.js
$.view('simpleComponent', {
    component: 'simpleComponent',
    defaults: {
        template: 'Vendor_Module/template'
    },
    initialize: function (config, messageContainer) {
        this.observe('isVisible');
    }
});
```
{:.chained}

```html
<!-- template.html -->
<div data-bind="visible: isVisible(), click: removeAll">
    ...
</div>
```

Breeze doesn't support uiComponents. Hovewer, we have a lightweight
replacement that can render the same html or knockout template. Read more
about [view components](views).

Here is a Breeze equivalent in two steps:

 1. Pre-render html template using special block and layout update:

    ```xml
    <block class="Swissup\Breeze\Block\HtmlTemplate" name="breeze.Vendor_Module_template" template="Vendor_Module::template.html"/>
    ```

 2. Add component code to the [new js file](#add-custom-js-file):

    ```js
    Component.extend({
        component: 'simpleComponent',
        defaults: {
            template: 'Vendor_Module/template'
        },
        create: function () {
            this.isVisible = ko.observable();
        }
    });
    ```

    Or, you can [reuse the same Luma-based file](#reusing-luma-files)!

## Migrate functions

Let's assume you have the following code that works on Luma theme:

```js
define(['jquery'], function ($) {
    return function (options, element) {
        //
    };
});
```

Here is a Breeze equivalent added to the [new js file](#add-custom-js-file):

```js
(function () {
    var init = function (options, element) {
        //
    };

    // Automatically mount on elements with data-mage-init='{"Vendor_Module/js/component"}'
    $(document).on('breeze:mount:Vendor_Module/js/component', (e, data) => {
        init(data.settings, data.el);
    });
})();
```

Or, you can [reuse the same Luma-based file](#reusing-luma-files)!

## Migrate objects

Let's assume you have the following code that works on Luma theme:

```js
define(['jquery'], function ($) {
    return {
        'Vendor_Module/js/component': function () {}
    };
});
```

Here is a Breeze equivalent added to the [new js file](#add-custom-js-file):

```js
(function () {
    var result = {
        'Vendor_Module/js/component': function (settings, element) {}
    };

    // Automatically mount on elements with data-mage-init='{"Vendor_Module/js/component"}'
    $(document).on('breeze:mount:Vendor_Module/js/component', (e, data) => {
        result['Vendor_Module/js/component'](data.settings, data.el);
    });
})();
```

Or, you can [reuse the same Luma-based file](#reusing-luma-files)!

## Migrate inline scripts

Let's assume you have the following code that works on Luma theme:

```html
<script>
require(['jquery'], ($) => {
    //
});
</script>
```

Here is a Breeze compatible equivalent:

```html
<script data-breeze>
require(['jquery'], ($) => {
    //
});
</script>
```

> Using custom dependencies in require call? You should [register them](#utility)
> in $.breezemap.

## Reusing Luma files

Breeze has a [simple `define` function](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/core/define.js){:target="_blank" rel="noopener"}.
This allows to reuse some of Luma-based widgets and components with
minimum changes.

In order to reuse Luma-based js files you need to register all js files using
`breeze_default.xml` layout update:

> The order of files is important. In the example below, `Vendor_Module/js/utility`
> is added on the top because it's used inside other components.

```xml
<referenceBlock name="breeze.js">
    <arguments>
        <argument name="bundles" xsi:type="array">
            <item name="default" xsi:type="array">
                <item name="items" xsi:type="array">
                    <item name="Vendor_Module/js/utility" xsi:type="string">Vendor_Module/js/utility</item>
                    <item name="Vendor_Module/js/widget" xsi:type="string">Vendor_Module/js/widget</item>
                    <item name="Vendor_Module/js/function" xsi:type="string">Vendor_Module/js/function</item>
                    <item name="Vendor_Module/js/object" xsi:type="string">Vendor_Module/js/object</item>
                    <item name="Vendor_Module/js/ui" xsi:type="string">Vendor_Module/js/ui</item>
                </item>
            </item>
        </argument>
    </arguments>
</referenceBlock>
```

Then you have to add compatibility changes into Luma-based files. Take a look
at the examples below.

### Utility

We need to register our component in `$.breezemap` object. By doing this we allow
to resolve `'Vendor_Module/js/utility'` string in `define` statements of all
other components.

```diff
 define([
     'jquery'
 ], function ($) {
     'use strict';
 
-    return function () {
+    var result = function () {
         //
     };
+
+    if ($.breezemap) {
+        $.breezemap['Vendor_Module/js/utility'] = result;
+    }
+
+    return result;
 });
```

### Widget

We need to add `component: 'Vendor_Module/js/widget'` to the widget code.
With this change Breeze will mount the widget on all
`data-mage-init='{"Vendor_Module/js/widget": {}}'` elements.

```diff
 define([
     'jquery',
     'Vendor_Module/js/utility' // taken from $.breezemap
 ], function ($, action) {
     'use strict';

     $.widget('widgetName', {
+        component: 'Vendor_Module/js/widget',
         _create: function () {}
     });
 });
```

### Function

If we want to mount our function on all
`data-mage-init='{"Vendor_Module/js/function": {}}'` elements, we need to apply
the following changes:

```diff
 define([
     'jquery',
     'knockout',
     'Vendor_Module/js/utility' // taken from $.breezemap
 ], function ($, ko, action) {
     'use strict';
 
-    return function (options, element) {
+    var result = function (options, element) {
     };
+
+    $(document).on('breeze:mount:Vendor_Module/js/function', (e, data) => {
+        result(data.settings, data.el);
+    });
+
+   return result;
 });
```

### Object

If we want to mount our object on all
`data-mage-init='{"Vendor_Module/js/object": {}}'` elements, we need to apply
the following changes:

```diff
 define([
     'jquery',
     'knockout',
     'Vendor_Module/js/utility' // taken from $.breezemap
 ], function ($, ko, action) {
     'use strict';
 
-    return {
+    var result = {
         'Vendor_Module/js/object': function (options, element) {}
     };
+
+    $(document).on('breeze:mount:Vendor_Module/js/object', (e, data) => {
+        result['Vendor_Module/js/object'](data.settings, data.el);
+    });
+
+   return result;
 });
```

### uiComponent

If we want to mount our component on all
`data-mage-init='{"Vendor_Module/js/ui": {}}'` elements, we need to apply
the following changes:

```diff
 define([
     'uiComponent',
     'Vendor_Module/js/utility' // taken from $.breezemap
 ], function (Component, action) {
     'use strict';

     return Component.extend({
+        component: 'Vendor_Module/js/ui',
         initialize: function () {}
     });
 });
```

### Html template

Breeze can pre-render html template from `web/template` folder using layout update 
instruction:

```xml
<referenceContainer name="breeze.container">
    <block
        class="Swissup\Breeze\Block\HtmlTemplate"
        name="breeze.Vendor_Module_template_confirmation_html"
        template="Vendor_Module::confirmation.html" />
</referenceContainer>
```

Then you can use this template as usual:

```js
define(['text!Vendor_Module/template/name.html'], function (template) {
    console.log(template);
});
```

## Turbo issues

When using Turbo SPA (Enabled by default), you have to cleanup all the things
created with js:

 - Remove generated HTML markup
 - Remove document and window event listeners
 - Revert current state to default: close popups, collapse expanded blocks, etc.

Otherwise you'll get duplicated HTML markup, duplicated event calls on each
visit, and restored state after using back/forward browser buttons.

Breeze automatically destroys event listeners added with `this._on` method
and cleanup all markup generated by uiComponents. However, sometimes you'll need
to cleanup more things. To do that, add additional logic into `destroy` method:

```js
$.widget('widetName', {
    create: function () {
        this.cartSubscription = $.sections.get('cart').subscribe(() => {});
        $(document).on('tap.vendorModule', () => {});
    },
    destroy: function () {
        $(document).off('tap.vendorModule');
        this.cartSubscription.dispose();
        this._super();
    }
});
```
