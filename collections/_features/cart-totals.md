---
layout: docs
title: Cart Totals
description: Shopping cart totals implementation details
---

# Cart Totals

* TOC
{:toc}

## About

Magento uses uiComponents to render totals at shopping cart page. Since many
third-party modules may define their own total components we've put
a lot of efforts to make totals components integration as easiest as possible.

See the souce code files for more information:

- Default totals sources
  - [Component](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/totals.js){:target="_blank" rel="noopener"}
  - [Templates](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_checkout_cart_index.xml#L18){:target="_blank" rel="noopener"}
- Tax totals sources
  - [Component](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/tax.js){:target="_blank" rel="noopener"}
  - [Templates](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_checkout_cart_index.xml#L19-L23){:target="_blank" rel="noopener"}
- Weee totals sources
  - [Component](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/weee.js){:target="_blank" rel="noopener"}
  - [Templates](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_checkout_cart_index.xml#L24){:target="_blank" rel="noopener"}

