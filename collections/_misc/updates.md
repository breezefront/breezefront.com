---
layout: default
title: Updates
description: Breeze updates
order: 50
---

# Updates

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

[2.0 Upgrade guide](/upgrade#upgrading-from-1xx-to-2xx)

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
