---
layout: docs
title: Custom Styles
description: How to add styles using custom Breeze-based theme.
order: 200
---

# Custom styles

> Make sure to [create and change](child-theme) your theme to `Local/breeze-custom`
> before start.

There are two entry points for custom styles in Breeze theme:

 -  `_extend.less` --- Use this file if you are custom theme developer.
 -  `_custom.less` --- Use this file if you are end-user of the custom theme.

Create `_[extend|custom].less` file in `Local/breeze-custom/web/css` folder. This file
will be included automatically and you can override less variable and create new
styles using this file.

We recommend you to split your customizations across multiple partials:

```scss
@import (reference) 'custom/abstracts/_variables.less';
@import 'custom/layout/_header.less';
@import 'custom/layout/_listing.less';
@import 'custom/layout/_swatches.less';
```

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── web/
│   ├── css/
│   │   ├── custom/
│   │   │   ├── abstracts/
│   │   │   │   └── _variables.less
│   │   │   └── layout/
│   │   │       ├── _header.less
│   │   │       ├── _listing.less
│   │   │       └── _swatches.less
│   │   └── _custom.less
│   └── images/
│       └── logo.svg
├── composer.json
├── registration.php
└── theme.xml
```
