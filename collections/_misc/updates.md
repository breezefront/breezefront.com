---
layout: default
title: Updates
description: Breeze updates
order: 50
---

# Updates

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
