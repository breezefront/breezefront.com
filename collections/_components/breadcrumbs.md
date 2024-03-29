---
layout: docs
title: Breadcrumbs
description: Breadcrumbs customization
---

# Breadcrumbs

* TOC
{:toc}

## About

Breadcrumbs --- is an HTML component. It's used to indicate the current page’s
location within a site.

[View Source Code](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/layout/_breadcrumbs.less){:target="_blank" rel="noopener"}

## LESS variables

```scss
@breadcrumbs__min-height: @9;
@breadcrumbs__gap: @2;
@breadcrumbs__wrap: true;
@breadcrumbs__border: false;
@breadcrumbs__border-width: false;
@breadcrumbs__background: false;
@breadcrumbs__color: false;
@breadcrumbs__font-size: false;
@breadcrumbs__font-weight: false;
@breadcrumbs__line-height: false;
@breadcrumbs__text-transform: false;
@breadcrumbs__padding-top: false;
@breadcrumbs__padding-bottom: false;

@breadcrumbs-item__gap: @1;
@breadcrumbs-item-separator__content: '';
@breadcrumbs-item-separator__icon: @icon-chevron;
@breadcrumbs-item-separator__width: @3;
@breadcrumbs-item-separator__height: @breadcrumbs-item-separator__width;

@breadcrumbs-item__hover__color: false;
@breadcrumbs-item__hover__text-decoration: underline;
@breadcrumbs-item__active__font-weight: false;
@breadcrumbs-item__active__color: false;

@breadcrumbs-item-home__icon: false;
@breadcrumbs-item-home__width: @4;
@breadcrumbs-item-home__height: @breadcrumbs-item-home__width;
```
