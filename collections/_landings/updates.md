---
navigation: false
layout: default
title: Updates
description: Breeze release notes
class: prose prose-zinc max-w-3xl mx-auto
---

# Updates
{:.text-center.text-zinc-800.sm:text-5xl.sm:font-black.md:text-6xl}

## Aug 17, 2023

> swissup/breeze:2.9.0<br>
> swissup/breeze-blank:2.5.6,swissup/breeze-evolution:2.1.5

 -  New gallery features added:
    -  [Expanded mode](/docs/gallery#expanded-gallery-mode)
    -  [Caption support](/docs/gallery#options)
    -  [Thumbnails as dots](/docs/gallery#options)
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

 -  **Added minimalistic email styles.** We've took Magento/blank email structure
    as a base, so you will find it super easy to integrate with existing blank/luma
    customizations. See the tutorial on [how to add email customizations from child theme](/email-styles).
 -  Improve bundle product details at order view page.
 -  Fixed missing options at product page for Bundle Products.
 -  Fixed error at homepage about unknown "new" attribute on fresh Magento installations.

## January 28, 2022

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

## January 14, 2021

 -  Allow to create nested view components.
 -  Fixed js error when recaptcha is enabled in product review form.
 -  Fixed "getTemplate" error when third-party component is not available in Breeze.
 -  Fixed responsive images sizes on the homepage.
