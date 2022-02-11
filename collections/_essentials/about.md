---
layout: default
title: About
order: 100
---

# About

👋 Hello there! We are the [Swissup team](https://github.com/swissup) and we develop
top-notch Magento modules and themes. As every responsible developer we want
to see how our products help merchants to increase sales and improve various
aspects of the store. The crusial aspect --- is a **store performance.**

Unfortunately, default Magento frontend is not good at performance, is not
supported actively and not evolving. Venia theme --- an upcoming replacement
is not a great option too. It's far far away from Luma's flexibility and
third-party modules friendliness.

That's why we decided to build Breeze --- a gentle shift from default
Magento frontend towards all-green performance, same level of customization
abilities, and quick integration with Luma-based customizations.

Breeze consists from two parts:

 -  **Breeze Module** --- a drop-in replacement for Magento js stack.

    - Universal solution that works with any Luma-based theme.
    - Easy to extend thanks to full support of `data-mage-init` declarations.
    - Customization friendly thanks to `mixins`, and component inheritance.
    - JS bundling, SPA experience, keyboard navigation, A11y friendly.

 -  **Breeze Theme** --- minimalistic starter theme for your next unique design.

    - Tiny size. 13kB of critical CSS and 8kB of deferred CSS.
    - Doesn't override default Magento templates and layout instructions which
      means easier integration for existing modules.
    - Uses well known stack: default LESS compiler and `@magento_import`
      to merge module styles into the theme at runtime.
    - Critical CSS, CSS bundling, responsive images, dark color scheme, RTL direction.
