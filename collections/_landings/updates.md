---
navigation: false
layout: default
title: Updates
description: Breeze release notes
class: prose prose-zinc max-w-3xl mx-auto
---

# Updates
{:.text-center.text-zinc-800.sm:text-5xl.sm:font-black.md:text-6xl}

## June 11, 2024

> swissup/breeze:2.17.0<br>
> swissup/breeze-blank:2.8.1

 -  Performance improvements for slow internet connections.
 -  Improve product page performance when it has a lot of reviews.
 -  Fixed possible flash of scroll reveal elements on initial page load.
 -  Fixed redirect loop at "Login as Customer" page.
 -  Fixed image jumping when jarallax video is used on cms row element.
 -  Fixed missing styles for "Login as Customer" panel.
 -  Stability improvements in js code.

**🚨 Backward Incompatible Changes**

 -  All scripts except `core` and `knockout` bundles are now asynchronously loaded.
    This means that you have to define dependencies of your scripts using `import`
    section:

    ```diff
     <item name="Vendor_Module/js/catalog-add-to-cart" xsi:type="array">
         <item name="path" xsi:type="string">Vendor_Module/path/to/file</item>
    +    <item name="import" xsi:type="array">
    +       <item name="priceUtils" xsi:type="string">Magento_Catalog/js/price-utils</item>
    +    </item>
     </item>
    ```

 -  In case if your js creates mixin for built-in component, you need to add
    `mixins` property to your js declaration:

    ```diff
     <item name="Vendor_Module/js/catalog-add-to-cart" xsi:type="array">
         <item name="path" xsi:type="string">Vendor_Module/path/to/file</item>
    +    <item name="mixins" xsi:type="array">
    +       <item name="catalogAddToCart" xsi:type="string">catalogAddToCart</item>
    +    </item>
     </item>
    ```

 -  Scripts are no longer automatically loaded unless used in `require()`, or `data-mage-init`.
    If you have the scripts that are not used in `data-mage-init` and `require()` calls,
    and you want to load it every time when bundle is loaded, you need to add
    `autoload` property to your js declaration:

    ```diff
     <item name="items" xsi:type="array">
         <item name="custom-js" xsi:type="array">
             <item name="path" xsi:type="string">js/path/to/file</item>
    +        <item name="autoload" xsi:type="boolean">true</item>
         </item>
     </item>
    ```

## May 3, 2024

> swissup/breeze:2.16.1<br>
> swissup/breeze-blank:2.8.0,swissup/breeze-evolution:2.2.0

 -  [Scroll reveal](/docs/scroll-reveal) and [zoom on hover](/docs/zoom-on-hover) animations added.
 -  Improve Paypal In Context integration.
 -  Fixed message alignment when it's centered.
 -  Fixed not working markers for unavailable swatches.
 -  Fixed js errors caused by turbo library.
 -  Added missing `$.fn.serializeArray` function.
 -  Fixed inheritance of nested objects in ui components.
 -  Fixed incorrectly working `.one` function.

## Apr 23, 2024

> swissup/breeze:2.16.0<br>
> swissup/breeze-blank:2.7.5

 -  Magento 2.4.7: Fixed broken checkout styles when critical CSS is enabled.
 -  Paypal-pay-later integration added.
 -  Improved "Add to cart" button positioning. when some products have swatches and some don't.
 -  Fixed paypal buttons overlapping over third-party Megamenu dropdown.
 -  Fixed incorrect url returned by `.toUrl()` when minification is enabled.
 -  Optimize `$.async` and `$.onReveal` logic.
 -  `js` class added to `html` element when js is enabled in browser.

## Apr 1, 2024

> swissup/breeze:2.15.0<br>
> swissup/breeze-blank:2.7.4,swissup/breeze-evolution:2.1.9

**🚨 Backward Incompatible Changes**

 -  $.post and $.get functions no longer accept second argument as ajax request options.
    Now, it's always parsed as ajax request data to send. This change aligns the functions
    with jQuery Ajax API.

    Old, incorrect way:

    ```js
    $.post(url, {
        data: {},
        success: () => {}
    });
    ```

    New, correct way:

    ```js
    $.post({
        url: url,
        data: {},
        success: () => {}
    });
    ```

**🎉 Fixes and Improvements**

 -  Magento 2.4.7 compatibility.
 -  Paypal-in-context integration added.
 -  ShowPassword component added.
 -  Out of stock items in product listing are now displayed in gray colors in BreezeEvolution theme.
 -  Fixed large margins between form fields when some fieldsets are empty.
 -  Fixed overlapped msrp price when it's shown aside of product name.
 -  Added missing styles for MultiSourceInventory StorePickup module.
 -  Fixed incorrect js dictionary file url.
 -  Fixed missing cookie messages on initial page load.
 -  Fixed js errors at "Paypal review order" page.
 -  Fixed incorrect breadcrumbs at product page when turbo is disabled.

**🏗️ Improved developer experience**

 -  Autoregister dynamic components for easier third-party modules integration.
 -  New [dynamic js bundle added](/docs/components#bundle-name) to simplify third-party modules integration.
 -  Added missing `mage/storage` component.
 -  Added ability to write [mixin for certain object only](/docs/mixins).
 -  Fixed duplicate "add to cart" action when using `$(form).trigger('submit')`.
 -  Added `Magento_Ui/js/model/messages` for easier third-party integrations.
 -  Added minimal `uiLayout` function implementation.
 -  Align [$.post, $.get functions and callbacks](/docs/ajax) with jQuery API.
 -  Improved [$.Deferred API](/docs/globals#deferred).
 -  Allow passing ko.observable in ajax request data.

## Mar 15, 2024

> swissup/breeze:2.14.4<br>
> swissup/breeze-blank:2.7.3

 -  Fixed persistent error message across all pages after checkout error.
 -  Fixed infinite cart page reload when third-party module changes 'customerData.cart' on each page reload.
 -  Fixed missing "block" styles when using [grunt](https://breezefront.com/docs/running-grunt#running-grunt)
    for the frontend developement.

## Mar 4, 2024

> swissup/breeze:2.14.1<br>
> swissup/breeze-blank:2.7.1

**👔 Added compatiblity with AdobeCommerce.**

 -  Requires
    [swissup/module-breeze-magento-enterprise](https://github.com/breezefront/module-breeze-magento-enterprise)
    package installation. You can see the list of supported features in the readme
    section if the repository.

**🏗️ Improved developer experience**

 -  Inline scripts with `require()` calls are **no longer removed** from the DOM
    structure. This was done to simplify integration of third-party modules.
 -  Improved javascript `$().find|$().is` methods for better support of jQuery
    specific selectors like `:input`, `:button`, `:image` etc.
 -  Added missing `validateSingleElement` function.
 -  Added missing `prompt` component.
 -  Align `.trigger('submit')` with jQuery - it will submit the form the the server now.
 -  Allow extending widget from prototype: `$.widget('name', $.mage.name, {})`
 -  `$.Deferred` object added.

**🐛 Fixes**

 -  Fixed not working first click on review stars when iOS device.
 -  Fixed incorrect breadcrumbs at products page when opening multiple browser tabs.
 -  Fixed incorrect date in calendar when year format is using two-digits.
 -  Fixed incorrect count of active ajax `$.active` requests when some is failed.
 -  Fixed not working `onInteraction` JS load rule.
 -  Fixed incorrect execution order of multiple large dynamic js components.
 -  Improved carousel styles.

## Feb 6, 2024

> swissup/breeze:2.13.1<br>
> swissup/breeze-blank:2.6.4

 -  Added ability to set custom position for field validation message using `data-errors-message-box`
    attribute: `<input ... data-errors-message-box="#element-selector"/>`
 -  Fixed ability to drag slider with mouse in Firefox browser.
 -  Fixed downloadable product page styles and scripts when each link is sold separately.
 -  Fixed possible missing dependencies of dynamic components.

## Feb 2, 2024

> swissup/breeze:2.13.0<br>
> swissup/breeze-blank:2.6.3

**🚀 Performance improvements**

 -  **[Dynamic JS](/docs/components#dynamic-component) feature added.**

    This feature allows to dynamically inject js components after specified event,
    or when some element is revealed in the viewport, or after first user interaction.

    Super useful for complex themes packed with tens of modules. Take a look at
    javascript size reduction on initial page load in our themes:

    Theme           | v2.12     | v2.13 | Improvement
    ----------------|-----------|-------|------------
    BreezeEvolution | 129kB     | 108kB | 16%
    ArgentoChic     | 225kB     | 111kB | 51%
    ArgentoForce    | 168kB     | 111kB | 34%
    ArgentoStripes  | 167kB     | 111kB | 34%

 -  **Added lazyload backgrounds for pagebuilder elements.**

    Pagebuilder slider, banner, and other components use background image
    property to create image. This makes impossible to use loading=lazy attribute
    and browser download all images on intial page load. We postpone loading of
    these background images until visitor scrolls to them.

    Theme           | v2.12     | v2.13 | Improvement
    ----------------|-----------|-------|------------
    BreezeEvolution | 276kB     | 169kB | 39%
    ArgentoChic     | 477kB     | 380kB | 21%
    ArgentoForce    | 691kB     | 432kB | 38%
    ArgentoStripes  | 712kB     | 410kB | 42%

**🏗️ Improved developer experience**

 -  **Allow extending custom uiComponents using `.extend()` function.**

    The code below is now fully compatible with Breeze:

    ```js
    define([
        'customComponent'
    ], function (customComponent) {
        'use strict';

        return customComponent.extend({...})
    })
    ```

    See real usage in [our repo](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/totals.js).

 -  **Allow registering anonymous uiComponent using `Component.register` function.**

    This tricky mechanism allows to reuse Luma-based files. Take look on how we
    reuse files in our integrations with [AmastyXsearch](https://github.com/breezefront/module-breeze-amasty-xsearch/tree/master/view/frontend/web/js),
    [MagefanBlog](https://github.com/breezefront/module-breeze-magefan-blog/tree/master/view/frontend/web/js),
    [SmileElasticSuite](https://github.com/breezefront/module-breeze-smile-elasticsuite/tree/master/view/frontend/web/js).

 -  `uiRegistry` component added.
 -  Added/improved jQuery polyfills: `$.each, $.now, $.isObjectEmpty, $.get, $.post`
 -  `$.fn.onReveal` function added with an ability to pass IntersectionObserver options.

**🐛 Fixes**

 -  Fixed possible missing items in the header Account dropdown.
 -  Fixed possible infinite spinner on initial page load.
 -  Fixed possible horizontal scroll on customer registration page when DOB field is shown.
 -  Fixed js errors after multiple fast clicks on the same link.

## Jan 17, 2024

> swissup/breeze:2.12.0

 -  Allow using `@` in html attribute names.
 -  Improved `$(document).on('breeze:load')` event listener. It will now trigger callback even if "load"
    was triggered before event was attached. Similar to `$(document).ready()` from jQuery.
 -  Allow using body CSS class in `$.async('classname')` calls.
 -  Allow storing functions using `$.fn.data` method.
 -  Register all components constructors in $.breezemap.
 -  Improved `$.loadScript` function to prevent duplicate requests and preserve script execution order.
 -  Added [debug mode](/docs/settings) support for ajax requests.
 -  Small fixes to improve integration with Luma-based modules.

## Nov 28, 2023

> swissup/breeze:2.11.0<br>
> swissup/breeze-blank:2.6.0,swissup/breeze-evolution:2.1.6

**Breaking Changes**

 -  We've changed the code that will show login popup:

    ```js
    // old code
    $('.block-authentication').modal('openModal');

    // new code
    $('#authenticationPopup').authPopup('showModal')
    ```

    The old code will not work anymore because of performance optimizations -
    `.block-authentication` is no longer exists in DOM structure until popup is shown.

    So, if you've used `$('.block-authentication').modal('openModal');` to show
    login popup, you need to replace it with new call.

**New Features and Improvements**

 -  The message about proper performance setup added to the backend panel.
 -  Improve critical image preload on homepage and category pages.
 -  [$(el).lineClamp()](/docs/line-clamp) widget added to use in pair with new `line-clamp-[1..6]` utilities.
 -  Improve [$.lazy](/docs/globals#lazy-script) behavior:
    - If user was active before lazy call - callback will run immediately.
    - Utilize single event listener for all lazy callbacks.
    - `breeze-inactive` class added to the body until first user interaction.
 -  Ability to run some logic in the widget when element [appears in viewport](/docs/widgets#onreveal).
 -  Color swatches are now render its options when element is visible.
 -  Added ability to hide currency title using `currency-separator` and `currency-title` classes.
 -  Added ability to use `absolute` position for [actions block](/docs/listing#actions-primary-and-secondary) when using grid listing.

**Fixes**

 -  Fixed js bundle redeployment during `setup:static-content:deploy` command.
 -  Fixed possible incorrect scroll offset on the product page.
 -  Fixed incorrectly processed tab clicks, when multiple tabs instances with same ids found on the page.
 -  Fixed not working slider for related products block.
 -  Fixed possible content jumping when closing collapsible element.
 -  Fixed inability to use `Home|End` keyboard keys to edit search query in the header's minisearch form.
 -  Fixed flash of unstyled jarallax video.
 -  Fixed inability to create optional date field.
 -  Fixed inverted input style when chrome's autofill is used.
 -  Fixed not working align-self property for pagebuilder columns.
 -  Fixed possible scrollbar caused by hidden swatch input.

## Sep 14, 2023

> swissup/breeze:2.10.0<br>
> swissup/breeze-blank:2.5.7

 -  Performance improvement for mid/low-end mobile devices. Total blocking time
    was reduced by 50-200ms. It's is a 2x improvement for these devices!
 -  Turbolinks.js is no longer included when disabled in backend settings.
 -  Added ability to [abort unfinished ajax request](/docs/ajax#aborting-request).
 -  Fixed possible js error when creating spinner.

## Aug 17, 2023

> swissup/breeze:2.9.1<br>
> swissup/breeze-blank:2.5.6,swissup/breeze-evolution:2.1.5

 -  New gallery features added:
    -  [Expanded mode](/docs/gallery#expanded-gallery-mode)
    -  [Caption support](/docs/gallery#options)
    -  [Thumbnails as dots](/docs/gallery#options)
 -  Allow to use jQuery-like `$.ajax().done|$.ajax().fail|$.ajax().always` callbacks.
 -  Fixed inability to translate "items\|item" phrase.
 -  Allow to get validator instance using `.data('validator')` method.
 -  Added `validateElement` method to validator class.
 -  Fixed script execution when using `ko.html` binding.

## July 28, 2023

> swissup/breeze:2.8.4<br>
> swissup/breeze-blank:2.5.5

 -  Fixed not working [GoogleAnalytics](/docs/google-analytics) when using
    `google/gtag/analytics4/active` option.
 -  Fixed email validation logic when email is not required.
 -  Fixed not working gallery in ajax popup when `customer` pages are exluded
    from Breeze.
 -  Fixed js error when `authenticationPopup` or `checkoutConfig` options are
    not available on the page.
 -  Fixed double reload at shopping cart page after discount code.
 -  Removed `:hover` styles from buttons on touch devices to prevent stuck "active" state
    when clicked the button.
 -  Added ability to store objects using `$(element).data` function.
 -  Added ability to change turbo status programmatically using PHP plugin.

## July 10, 2023

> swissup/breeze:2.8.2<br>
> swissup/breeze-blank:2.5.3

 -  `breeze:config:dump` [command added](/docs/cloud-commerce).

    > This command is useful when using
    [pipeline deployment without DB access](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/deployment/technical-details.html?lang=en){:target="_blank" rel="noopener"}.

 -  Added missing `$.fn.uniqueId` and `$.fn.removeUniqueId` methods.
 -  Fixed not visible global loading indicator when modal or slide panel is opened.

## July 4, 2023

> swissup/breeze:2.8.1<br>
> swissup/breeze-evolution:2.1.4

 -  Added ability to drag slider with mouse.
 -  Fixed "Cannot apply bindings" error when scripts moved to the bottom.
 -  Fixed possible incorrect products price when using Wageworx_AdvancedProductOptions.
 -  Added focus state style for input fields in BreezeEvolution theme.

## June 27, 2023

> swissup/breeze:2.7.3<br>
> swissup/breeze-blank:2.5.2,swissup/breeze-evolution:2.1.3

 -  Improved print order styles.
 -  Fixed automatic print dialog appearance on all print pages.
 -  Fixed incorrect `component.destroy` logic that prevented initializing the component once again.
 -  Fixed inability to collapse accordion item when all items were initially active.
 -  Improve MSRP styles when the price is hidden until checkout.

## June 26, 2023

> swissup/breeze:2.7.2<br>
> swissup/breeze-blank:2.5.1

 -  Added compatibility with custom checkout fields styles.
 -  Improved messages styles inside modal.
 -  Added `.nested-counter` helper to create nested ordered lists.
 -  Various improvements to prices styles:
    - Fixed Product Tax style improved.
    - Manufacturer's Suggested Retail Price output improved.
    - Complex Tier Price output improvements.

## June 15, 2023

> swissup/breeze:2.7.1

 -  Fixed not working "Clear Shopping Cart" button at "Shopping Cart" page.
 -  Fixed Zip/Email switcher at "Orders and Returns" page.

## June 5, 2023

> swissup/breeze:2.7.0<br>
> swissup/breeze-blank:2.5.0

 -  [Auth popup](docs/login-popup) added with Captcha, reCaptcha,
    [Swissup_ReCaptcha](https://docs.swissuplabs.com/m2/extensions/recaptcha/), and
    [Swissup_SocialLogin](https://docs.swissuplabs.com/m2/extensions/social-login/)
    modules support.
 -  Improved layout processing logic: prevent initializing of disabled components.
 -  Improved integration of Luma-based code:
    - [Object-based component](docs/integration-tips#object)
    - [Function-based component](docs/integration-tips#function)
    - [Utility function](docs/integration-tips#utility)
 -  Fixed ability to set [initially focused element](docs/modal#options) inside modal popup.
 -  JS fixes at checkout/cart/configure page.
 -  Minor form styles fixes.
 -  Fixed possible js errors in browser console when navigate using back and forward buttons.
 -  Fixed ability to create js components with more than one inheritance level.

## May 22, 2023

> swissup/breeze:2.6.0<br>
> swissup/breeze-blank:2.4.0

**New Features**

 -  Shopping cart page support added with the following Magento OpenSource features:
    - Discount block
    - Shipping and Tax Estimation block
    - Gift Messages
 -  Added "Video as background" and "Parallax" PageBuilder features support.

**Improvements**

 -  Price styles improved when Incl. tax and Excl tax are used.
 -  Added ability to initialize and render nested UI components.
 -  Added missing 'validate-one-required-by-name' validator.
 -  Added ability to persist collapsible element state using `saveState` option.
 -  Prevent jumping content when loading mask is added to the form.
 -  Fixed incorrect blocks sort order when using tab to navigate at the cart page.
 -  Few accessebilty errors where fixed.

**Bugfixes**

 -  Fixed possibile duplicate price labels inside confiruable product's dropdown options.
 -  Fixed not working "Add to cart" from msrp popup when tier prices are used.
 -  Fixed possible incorrect gallery images when using with configurable product.
 -  Fixed incorrect active image after choosing an option/swatch if main image is not first.
 -  Fixed few edge cases when saving data via ajax request.
 -  Fixed spinning minicart icon when trying to buy not available bundle product.
 -  Fixed ability to read/write boolean values in the local storage.

## April 28, 2023

> swissup/breeze:2.5.5

 -  Hotfix release that fixes js error in third-party module integrations. This error
    was added in previous 2.5.4 release.
 -  Allow to call field validation [without showing the errors](docs/validator#manual-validation)
 -  Fixed missing active class in manually added menu items.

## April 27, 2023

> swissup/breeze:2.5.4, swissup/breeze-blank:2.3.6<br>
> swissup/breeze-evolution:2.1.2, swissup/module-breeze-integrations:1.3.1

**Performance improvements**

 -  Allow using ["Move js to bottom" option](docs/performance#enable-performance-settings) 
    starting from Magento 2.4.1. In older Magento versions this option is not 
    supported and will cause js error.
 -  Improve image preload feature on the homepage.
 -  Prevent CLS when breadcrumbs are too long for the single line in Evolution theme.

**Fixes and minor improvements**

 -  Improve styles for accordion and collapsible elements when [using in CMS page](docs/cms-elements).
 -  Improve email validation, add pattern validation support.
 -  Improved integration with Swissup_Pagespeed module.
 -  Fixed js error on configurable product page when some images were excluded from display.
 -  Fixed broken range slider styles in Firefox browser.

## April 13, 2023

> swissup/breeze:2.5.2<br>
> swissup/module-breeze-integrations:1.3.0

 -  For easier third-party modules integrations management we've moved all
    integrations to their own packages. Breeze integrations package is now contains
    Swissup integrations only.

    - Amasty_Mostviewed moved to `swissup/module-breeze-amasty-mostviewed`
    - Amasty_Xotif moved to `swissup/module-breeze-amasty-xnotif`
    - Magezon_Builder example moved to `swissup/module-breeze-magezon-builder`
    - Magezon_Pagebuilder example moved to `swissup/module-breeze-magezon-pagebuilder`
    - Mirasvit_Cachewarmer moved to `swissup/module-breeze-mirasvit-cachewarmer`
    - Mirasvit_GoogleTagManager moved to `swissup/module-breeze-mirasvit-gtm`

   If you used one of these integrations, you will need to install it manually
   with `composer require` command.

## April 12, 2023

> swissup/breeze:2.5.1<br>
> swissup/breeze-blank:2.3.5

 -  Fixed broken email styles in Magento 2.4.6.
 -  CSS fix to prevent third-party fieldsets from hiding at account edit page.
 -  Allow to create nested sliders.
 -  Fixed empty date of birth field in customer edit page.
 -  Allow to use `require()` function without callback.
 -  Few fixes to calendar component.

## April 6, 2023

> swissup/breeze:2.5.0<br>
> swissup/breeze-blank:2.3.4

 -  Calendar support added. We've used hative HTML date field, so it may be quite
    limited compared to jQueryUI calendar. Please
    [open a discussion](https://github.com/breezefront/community/discussions),
    if it's not working good for you.
 -  Fixed possible missing components in generated bundles when using
    `setup:static-content:deploy` command.
 -  CloudCommerce compatibility fixes. It's now possible to run static content
    deployment during the [build phase without DB access](https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/develop/deploy/static-content.html?lang=en).
 -  Code cleanup.

## March 23, 2023

> swissup/breeze:2.4.4

 -  Fixed possible js error when recently viewed widget is added via bakend widgets page.
 -  Fixed incorrect static resource URL on multilingual site.
 -  Fixed unclosable slideout menu when two menu's are added to the header.
 -  Fixed ajax request when raw FormData is passed as data.
 -  Fixed array and nested json serialization in ajax request.
 -  Fixed ajax request when data key has `=` in its name.

## March 13, 2023

> swissup/breeze:2.4.3<br>
> swissup/breeze-blank:2.3.3

 -  Magento 2.4.6 and PHP 8.2 compatibility added.
 -  Added ability to include third-party scripts [after user interaction](/docs/globals#lazy-script). 
    This is a useful feature to include third-party scripts without
    affecting pagespeed score. The following modules will use this feature out of the box:
    - GoogleAnalytics
    - GoogleTagManager
    - Recaptcha
 -  Show header icons without delay to decrease LCP value.
 -  Fixed ability to select unavailable product in dropdown at configurable product page.
 -  Fixed empty alt text in product main image. Product name will be used as a fallback now.
 -  Fixed visible configurable variation qty when moved outside sku block.
 -  Fixed jumping content when price label gets hidden.
 -  Fixed invisible regular price for configurable products when discount is applied
 -  Added missing minlength, maxlength, min, and max js validators.
 -  Update all bundled js libraries.
 -  Drastically reduced LCP value for Evolution theme.
 -  Reduce noise at category listing for touch devices in Evolution theme - 
    Add to cart button will use secondary button styles now.

## February 23, 2023

 -  Fixed disabled submit button when google recaptcha module is active.
 -  Improved styles when google recaptcha is added to the form.

## January 19, 2023

 -  Fixed possible bug when the same resource may load with different version number
    across the website.
 -  Do not show empty active filters badge when using third-party layered navigation.

## January 17, 2023

 -  Integration with [smile/elasticsuite](https://github.com/Smile-SA/elasticsuite) module added.
    Integration is available via [separate module](https://github.com/breezefront/module-breeze-smile-elasticsuite).
 -  Range-slider component added to use with any third-party layered navigation module.
 -  `breeze:module:create` command added.
 -  `breeze:theme:create` command added.
 -  RTL fixes for product magnifier.

## January 9, 2023

 -  Magento_GoogleGtag integration added. Integration was added for both Analytics4
    and Adwords components.

## January 5, 2023

**Gallery Improvements**

 -  Magnifier support added to product gallery. [View available options](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/etc/view.xml#L249-L266).
 -  Fixed not working pinch to zoom when multiple galleries are created.
 -  Cache previously loaded images to decrease network requests count.
 -  Prevent 2 active thumbs in the gallery.

**General Fixes and Improvements**

 -  Fixed missing js files in merged bundle when deploying on page refresh (dev mode).
 -  Do not encode non-latin chars in html source.
 -  Fixed inability to save address with selected region from customer address page.
 -  Fixed multiple visible spinners in one element.

**Evolution theme**

 -  Enabled [magnifier option](https://github.com/breezefront/theme-frontend-breeze-evolution/blob/master/etc/view.xml#L167-L169).
 -  Display "Add to Cart" button on touch devices.
 -  Use sticky messages position.

## November 15, 2022

> swissup/breeze:2.0.0

[2.0 Upgrade guide](/docs/upgrade-guide#upgrading-from-1xx-to-2xx)

**Backward Incompatible Changes**

 -  🗑️ Removed all `rgb-*` variables to simplify theme styling.
 -  🏗️ Changed markup in the header dropdown items.
 -  🦇 Dark mode was disabled since it was rarely used by the customers.
 -  🔧 A bunch of `less` variables were renamed.

**Fixes and Improvements**

 -  🎉 [Argento Force theme](/screenshots#argento-force) created.
 -  🚀 Improved LCP on product page using fetchpriority for product image.
 -  💄 Easier forms and buttons customizations using LESS variables.
 -  🏗️ Simplified responsive layout breakpoints.
 -  🚀 As a result of simplified layout we've decreased count of generated
    responsive images that may be crucial for budget hostings.
 -  ✨ Sticky messages with autohide feature added.
 -  💄 Containered slider style added.
 -  🔧 Automatically reload page during turbo load if static files were changed.
 -  🧵 And more than 50 small fixes in CSS and JS components.

## September 20, 2022

 -  🔧 Fixed compatibility with Magento 2.3.5 that was broken in the previous release.
 -  ✨ $.breeze.url helper added. It's also available as `mage/url` in require and define calls:

    ```js
    define(['mage/url'], function (url) {
        console.log(url.build('hello/there'));
    });
    ```

## September 16, 2022

 -  ✨ In addition to previous release we've added support
    [for inline scripts](/integration-tips#migrate-inline-scripts). This allows
    reusing Luma-based templates with simple inline scripts.

## September 14, 2022

 -  ✨ Improved ability to reuse Luma-based files in Breeze frontend. This
    feature is super useful for third-party module developers.
    [Read details](/integration-tips#reusing-luma-files).
 -  🔧 Allows to include third-party scripts (chats, analytics, etc).
    Previously you had to add `data-breeze` attribute for these scripts.
 -  🔧 Added missing translation in 'Recent' product block title.
 -  🔧 Fixed broken gallery styles when using critical css on Luma-based themes.
 -  🔧 Fixed wrong scroll position on mobile devices when swithing between tabs.
 -  🔧 Fixed form serialization when sending array data to the server.
 -  🔧 Fixed redirect to homepage after log out.
 -  🔧 Fixed missing contact info in mobile slideout on non-breeze pages (cart).
 -  💄 Few small CSS fixes

## September 1, 2022

 -  💄 Added font-family variables to [easily customize font](/custom-fonts)
    in block titles, buttons, or whole site.
 -  🔧 Fixed incorrect urls to local resources in critical CSS.
 -  🔧 Fixed error in PHP log files about missing requirejs files when js merge is enabled.
 -  🔧 Removed font-related css properties. Less variables should be used instead.

## August 25, 2022

 -  💄 Header panel was [moved into the slideout menu](https://twitter.com/breezefront/status/1559913064853606400)
    on mobile devices.
 -  ✨ Amasty_MostViewed integration added.
 -  🔧 CSS fixes for Right-to-Left languages.
 -  🔧 Fixed not working "scroll to top" on Breeze Evolution theme (iOS only).

## August 16, 2022

 -  Fix a few bugs in our `$.ajax` implementation so it now more compatible with
    code written for jQuery.
 -  Fixed ability to disable Turbo at store level using backend config.

## August 10, 2022

 -  Properly update product price when changing qty and tier-pricing is enabled.
 -  Fix incorrect price when configurable options passed via query hash params (Example: #190=3).
 -  Fixed not working "Reload captcha" button.
 -  Fixed error during static content deploy if minification option was changed.
 -  Fixed styles for configurable product options that are not swatches.

## July 26, 2022

 -  [Cash.js](https://github.com/breezefront/cash) library updated with a
    fix for `form.serialize` method.
 -  Small CSS fixes and improvements for HTML carousel, multiselect fields,
    lists, headers, and submit button.
 -  [Magefan's blog](https://github.com/magefan/module-blog) module
    [integrarion added](https://github.com/breezefront/module-breeze-magefan-blog).

## July 19, 2022

 -  Added ability to add slides programmatically to `pagebuilderSlider`.
 -  Added new `breeze_theme` layout handle when Breeze theme is used.

## July 11, 2022

 -  🚀 Removed superagent library dependency --- minus 10 kB of javascript.
 -  🔧 Fixed notice about empty `_email.less` file during static content deployment.

## July 1, 2022

 -  ✨ Zoom feature was added to the product gallery.
 -  💄 Improved styles of opened product gallery.
 -  🔧 Double tap `dbltap` event support added.

## June 23, 2022

 -  ✨ Mirasvit_GoogleTagManager integration added.
 -  🔧 Improved compatibility with third-party modules that use plain javascript
    in the html body tag.

## June 20, 2022

 -  ✨ [Argento Stripes theme](/screenshots#argento-stripes) created.
 -  💄 Improved default styles for contact, login, create account, advanced search pages.
 -  💄 More LESS variables for product item on category page:
      - Reveal information on hover.
      - Truncate product name to fit into X lines.
      - Columns count per different screen sizes.
 -  💄 More LESS variables to [change minicart view in header](https://twitter.com/breezefront/status/1522510428529692673){:target="_blank" rel="noopener"}.
 -  🚀 Fixed layout shift caused by slider initialization.
 -  🔧 Remember recently viewed products for 1 day instead of 15 minutes.
 -  🔧 And up to 50 commits with small fixes and improvements!

## April 25, 2022

 -  🔧 Fixed price update in product listing when swithing to another configurable product variation.
 -  💄 Fixed styles of out-of-stock label in product listing when shown over
    the image.
 -  💄 Fixed swatches over the image after listing's ajax refresh.
 -  💄 Added missing "disabled" state to swatch item filter.

## April 15, 2022

 -  🔧 Magento 2.4.4 and PHP 8.1 compatibility

## April 11, 2022

 -  ✨ Added Paypal Express Order Review page support.
 -  💄 Tiny checkout CSS fixes.
 -  🔧 Improved Paypal Express button stability in minicart dropdown.
 -  🔧 Fixed missing components when deploying static content via terminal.
 -  🔧 Fixed rare js error when using `$.async` function.

**Developer experience**

 -  🔧 Much better `$.ajax` request compatibility with jQuery syntax:
    - `beforeSend` support added.
    - `context` support added.
    - Better handling of plain html response.
    - Ability to pass request data as URL-encoded string.

## March 29, 2022

> In order to update from previous version, run the following command:
> `composer require swissup/breeze-blank -w`

 -  ✨ [Breeze Evolution theme](/screenshots#breeze-evolution) created.
    See [updated installation guide](/installation) on how to install new theme.
 -  ✨ Added store contact information in top panel above the header.
 -  ✨ Added GoogleMaps widget support inserted with Magento Pagebuilder.
 -  💄 Much more variables in `.less` files.
 -  🔧 Fixed js bundles deployment in Commerce Cloud environment.
 -  🔧 Fixed minor css issues with various Swissup modules.

## March 10, 2022

 -  Updated compatibility with latest versions of Swissup modules.

## March 1, 2022

 -  🔧 Fixed js chunks deployment during `setup:static-content:deploy` command.
    This fixes compatibility with Magento Commerce Cloud environment.
 -  🔧 Fixed error in logs about empty less file during deployment.
 -  💄 Fixed CSS issues when menu is moved inside header.
 -  💄 Fixed dropdown styles when parent container is dark.
 -  💄 Added new LESS variables to improve cusomization abilities.

## February 17, 2022

> swissup/breeze:1.10.0

**Module Updates**

 -  🚀 Added critical images preloading. This feature decreases time of
    Largest Contentful Paint. _No additional actions are required to activate this feature_.
 -  🚀 Added "Use CSS critical path" config option support. Activate it at
    _Stores > Configuration > Advanced > Developer > CSS Settings > Use CSS critical path_.
 -  🚀 Added js chunking mechanism that improves page load time on slow internet
    connections. _No additional actions are required to activate this feature_.
 -  🔧 Slightly improve js and html minification.

**Theme Updates**

 -  💄 Improved chevron position in collapsible layered navigation filters.
 -  💄 Added ability to wrap product thumbnails to the new line instead of overflowed scrolling.
 -  🔧 Fixed video centering at product page gallery.

## February 8, 2022

> swissup/breeze:1.9.1

 -  **Added minimalistic email styles.** We've took Magento/blank email structure
    as a base, so you will find it super easy to integrate with existing blank/luma
    customizations. See the tutorial on [how to add email customizations from child theme](/email-styles).
 -  Improve bundle product details at order view page.
 -  Fixed missing options at product page for Bundle Products.
 -  Fixed error at homepage about unknown "new" attribute on fresh Magento installations.

## January 28, 2022

> swissup/breeze:1.9.0

**Theme Updates**

 -  **All Swissup modules are now compatible with Breeze!**
 -  Fixed grouped product view on mobile devices.
 -  Move navigation container below header to allow to use sticky menu.
 -  Better compatibility with third-party modules.

**Module Updates**

 -  Support for jQuery-like api in ajax requests: `$.ajax`, `$.post`, `$.get`.
 -  Added support for multiple expanded tabs. This is useful when transforming tabs into accordion.
 -  Improved click handling inside modal popups.
 -  Improved SPA experience.

## January 14, 2022

> swissup/breeze:1.8.4

 -  Allow to create nested view components.
 -  Fixed js error when recaptcha is enabled in product review form.
 -  Fixed "getTemplate" error when third-party component is not available in Breeze.
 -  Fixed responsive images sizes on the homepage.

## December 13, 2021

> swissup/breeze:1.8.0

 -  Remove lazyload attribute from main image in gallery since it's rendered above the fold.
 -  Focus trap added to the modal popups.
 -  Improved image loader when click on the swatch attribute.
 -  Added responsive image support.
 -  Keyboard navigation improvements.
 -  Prevent button resize when press add to cart.
 -  Underscore library updated to the latest version.
 -  Small fixes in various js components.

### October 21, 2021

> swissup/breeze:1.7.4

 -  Prevent page jumping when showing modal popup.
 -  Keyboard navigation improvements for modal and dropdown components.
 -  Fixed rare error when caret is stuck inside search input.
 -  Do not close dropdowns behind overlay when click in modal.
 -  Amasty_Xnotif (Out of Stock Notification) integration added.

### September 14, 2021

> swissup/breeze:1.7.0

 -  Added Pagebuilder's Slider and Carousel support.
 -  Swipe gestures added to product page gallery
 -  Use tiny scrollbar for product gallery.
 -  Prevent page zoom when double click on slider or gallery arrows/dots.
 -  Fixed js error when third-party module uses minicart/content.html template.
 -  Improved js bundles invalidation. Previously you had to remove old bundles manually.
    Now new bundles updated automatically after cache cleanup.
 -  Cleanup dom structure from js templates to improve dev expirience when using
    Elements panel in dev tools.
 -  Added ability to disable component via mixin.
 -  Lazy mixins and widget declarations. You can now declare mixins and components
    before parent class is loaded.
 -  Code refactoring.

### August 15, 2021

> swissup/breeze:1.6.1

 -  Bundle products are now supported.
 -  Fixed not working "Add to cart" button on initial product page load when Turbo mode is enabled.
 -  Fixed ability to add configurable products to the wishlist without losing selected options.

### August 6, 2021

> swissup/breeze:1.5.0

 -  **Singe-page application support added!** [New option](/docs/settings)
    allows to transform your store into a site that doesn't reload the page during its use.
    This means faster browsing and better user experience!
    ([Turbolinks.js](https://github.com/turbolinks/turbolinks#turbolinks) is used under the hood).
 -  Fixed visible plus symbols in success messages on some server setups.

### July 15, 2021

> swissup/breeze:1.4.0

 -  Added ability to disable Breeze for [specified URLs](/docs/settings).
 -  Magento_Captcha integration added.
 -  Magento_ReCaptcha integration added.
 -  Magento_LoginAsCustomer integration added.
 -  Added modal, alert, and confirm components.
 -  When debug mode is enabled and '?breeze=1' parameter is set, Breeze will work
    regardless if current page is from exluded urls list.
 -  Fixed not working 'Add all to cart' button at wishlist page.
 -  Fixed js error at customer account page.
 -  Fixed not working gallery on wishlist/configure page.
 -  Fixed failed form validation when checkbox with empty value is required.
 -  Prevent layout shift in gallery component when critical CSS is enabled.

### June 3, 2021

> swissup/breeze:1.3.0

 -  Magento_GoogleTagManager integration added.
 -  Fixed ability to activate multiple collapsibles at once.
 -  Fixed invalid image ratio at product page on iOS devices.
 -  Fixed undefined 'priceUtils' js error.
 -  Fixed not working address delete and add actions at customer account page.

### May 19, 2021

> swissup/breeze:1.2.0

 -  Configurable products support added.
 -  Colorswatches support added.

### May 14, 2021

> swissup/breeze:1.1.0

 -  Improved flexibility of bundled components for better third-party modules integration.
 -  Component inheritance implemented.
 -  Small fixes in js components.
 -  $.async function added.
 -  Ability to force breeze status via [query parameter](/docs/settings).

### April 13, 2021

> swissup/breeze:1.0.0

 -  Initial Release.
 -  Supported pages (All except Shopping Cart and Checkout):
    - Home and other CMS pages
    - Category
    - Product
    - Search and Advanced Search
    - Account
    - Contact us
 -  Supported products (All except Configurable and Bundle):
    - Simple
    - Virtual
    - Downloadable
    - Grouped
 -  Supported features:
    - Add to cart, compare, and wishlist
    - Minicart popup
    - Recently viewed products
    - Product page gallery
    - Form validators
    - Quick search
    - Google analytics
    - Cookie restriction mode
    - MAP popup
    - Paypal buttons
    - Varnish cache (ESI blocks)
