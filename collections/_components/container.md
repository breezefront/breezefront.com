---
layout: docs
title: Container
navigation: false
description: >
    Container is used to constrain its content within a specific width per
    responsive breakpoint.
---

# Container

* TOC
{:toc}

## About

Container --- is an HTML wrapper that used to constrain its content within a
specific width per responsive breakpoint.

[View Source Code](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/components/_container.less){:target="_blank" rel="noopener"}

## LESS variables

```scss
@container__margin: 0 auto;
@container__padding: @1-5 @2;

@container__max-width: 1260px;
@container__media-sm__max-width: false;
@container__media-md__max-width: false;
@container__media-lg__max-width: false;
@container__media-xl__max-width: false;
@container__media-xxl__max-width: false;
```

## Example

Here is an example of boxed container settings:

```scss
@container__max-width: none;
@container__media-sm__max-width: @sm;
@container__media-md__max-width: @md;
@container__media-lg__max-width: @lg;
@container__media-xl__max-width: @xl;
@container__media-xxl__max-width: @xxl;
```
