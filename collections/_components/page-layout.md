---
layout: docs
title: Page Layout
description: Page layout and sidebar customization
---

# Page Layout

* TOC
{:toc}

## About

Breeze allows to apply some basic styling to the page layout. You can control
boxed and narrow pages state using LESS and XML layout update instructions.

## Container

Container --- is an HTML wrapper that used to constrain its content within a
specific width per responsive breakpoint.

You can customize container styles with LESS variables:

```scss
@container__margin: 0 auto;
@container__padding: @1-5 @2;

@container__max-width: 1260px;
@container__media-sm__max-width: false;
@container__media-md__max-width: false;
@container__media-lg__max-width: false;
@container__media-xl__max-width: false;
@container__media-xxl__max-width: false;

// Boxed container example
// @container__max-width: none;
// @container__media-sm__max-width: @sm;
// @container__media-md__max-width: @md;
// @container__media-lg__max-width: @lg;
// @container__media-xl__max-width: @xl;
// @container__media-xxl__max-width: @xxl;
```

## Sidebar

```scss
@sidebar__width: 180px;
@sidebar__gap: @4;
@sidebar__media-lg__width: 220px;
@sidebar__media-lg__gap: @8;
```

## Narrow page

Narrow page is the 1column page variation with hidden breadcrumbs, centered page title,
and narrow content section. Breeze uses narrow page layout by default for the
following pages:

 - [Create account](https://breeze.swissupdemo.com/breeze_blank/customer/account/create/){:target="_blank" rel="noopener"}
 - [Forgot password](https://breeze.swissupdemo.com/breeze_blank/customer/account/forgotpassword/){:target="_blank" rel="noopener"}
 - [Contact Us](https://breeze.swissupdemo.com/breeze_blank/contact/){:target="_blank" rel="noopener"}
 - [Advanced Search](https://breeze.swissupdemo.com/breeze_blank/catalogsearch/advanced/){:target="_blank" rel="noopener"}
 - [Orders and Returns](https://breeze.swissupdemo.com/breeze_blank/sales/guest/form/){:target="_blank" rel="noopener"}
 - [Popular Search Terms](https://breeze.swissupdemo.com/breeze_blank/search/term/popular/){:target="_blank" rel="noopener"}

You can transform any single column page into the narrow page using the layout
update handle:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <update handle="breeze_page_narrow"/>
</page>
```

To disable applied narrow page style, use the following layout update:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <attribute name="class" value="narrow-page-reset"/>
    </body>
</page>
```

## Boxed page

Additionally, narrow pages use boxed styles for its content blocks. Each Breeze-based
theme may define its own [boxed block styles](blocks).

Customer registration form is a good example of boxed block styles:

 - [Breeze Blank Theme](https://breeze.swissupdemo.com/breeze_blank/customer/account/create/){:target="_blank" rel="noopener"}
 - [Breeze Evolution Theme](https://breeze.swissupdemo.com/breeze_evolution/customer/account/create/){:target="_blank" rel="noopener"}
 - [Argento Force Theme](https://argento-breeze-m2.swissupdemo.com/force_breeze/customer/account/create/){:target="_blank" rel="noopener"}

Boxed styles for these pages enabled using LESS variables:

```scss
@boxed-page: true;
@boxed-page-contact: true;
@boxed-page-login: true;
@boxed-page-404: true; // enabled for 1column layout only
```
