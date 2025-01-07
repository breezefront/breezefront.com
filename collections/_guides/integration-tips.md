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
          <item name="module-js-file" xsi:type="array">
            <item name="path" xsi:type="string">Vendor_Module/js/breeze/new-js-file</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>

          <!-- Adding file from custom theme -->
          <item name="theme-js-file" xsi:type="array">
            <item name="path" xsi:type="string">js/breeze/new-js-file</item>
            <item name="autoload" xsi:type="boolean">true</item>
          </item>
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
    'catalogAddToCart': {
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
$.mixin('catalogAddToCart', {
    method: function (original, arg) {
        console.log('Mixin!');
    }
});
```

Additionally, you need to add `mixins` property:

```diff
 <referenceBlock name="breeze.js">
   <arguments>
     <argument name="bundles" xsi:type="array">
       <item name="default" xsi:type="array">
         <item name="items" xsi:type="array">
           <item name="my-mixins" xsi:type="array">
             <item name="path" xsi:type="string">Vendor_Module/js/breeze/mixins-file</item>
+            <item name="mixins" xsi:type="array">
+              <item name="catalogAddToCart" xsi:type="string">catalogAddToCart</item>
+            </item>
           </item>
         </item>
       </item>
     </argument>
   </arguments>
 </referenceBlock>
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

Here is a both Breeze and Luma compatible js file:

```js
define(['jquery', 'jquery-ui-modules/widget'], function($) {
    $.widget('widgetName', {
        component: 'Vendor_Module/js/widget', // <-- add this line
        _create: function() {}
    });
});
```

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
Component.extend({
    defaults: {
        template: 'Vendor_Module/template'
    },
    initialize: function () {
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

Here is a Breeze equivalent in two steps:

 1. [Pre-render html template](ui-components#rendering-html-template) using
    layout update instruction:

    ```xml
    <block class="Swissup\Breeze\Block\HtmlTemplate"
        name="breeze.Vendor_Module_template"
        template="Vendor_Module::template.html"/>
    ```

 2. And here is a both Breeze and Luma compatible code:

    ```js
    Component.extend({
        component: 'simpleComponent', // <-- add this line
        defaults: {
            template: 'Vendor_Module/template'
        },
        initialize: function () {
            this.observe('isVisible');
        }
    });
    ```

## Migrate functions

Let's assume you have the following code that works on Luma theme:

```js
define(['jquery'], function ($) {
    return function (options, element) {
        //
    };
});
```

Here is a both Breeze and Luma compatible js file:

```js
define(['jquery'], function ($) {
    var result = function (options, element) {
        //
    };

    result.component = 'Vendor_Module/js/component';

    return result;
});
```

## Migrate objects

Let's assume you have the following code that works on Luma theme:

```js
define(['jquery'], function ($) {
    return {
        'Vendor_Module/js/component': function () {}
    };
});
```

Here is a both Breeze and Luma compatible js file:

```js
define(['jquery'], function ($) {
    return {
        component: 'Vendor_Module/js/component', // <-- add this line
        'Vendor_Module/js/component': function () {}
    };
});
```

## Migrate inline scripts

Let's assume you have the following code that works on Luma theme:

```html
<script>
require(['myCustomDependency'], (dependency) => {
    //
});
</script>
```

In Breeze, you have to register the `myCustomDependency` in `breeze_default.xml`
and add the `component` property to your dependency like in the examples above.

## Migrate html template

You have to pre-render html template from `web/template` folder using layout update
instruction:

```xml
<referenceContainer name="breeze.container">
    <block
        class="Swissup\Breeze\Block\HtmlTemplate"
        name="breeze.Vendor_Module_template_confirmation_html"
        template="Vendor_Module::confirmation.html"/>
</referenceContainer>
```

Then you can use this template as usual:

```js
define(['text!Vendor_Module/template/confirmation.html'], function (template) {
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
