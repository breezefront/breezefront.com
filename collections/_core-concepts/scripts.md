---
layout: docs
title: Scripts
description: Breeze scripts
order: 400
---

# Scripts

* TOC
{:toc}

## About

Breeze JS inherits its concepts from Luma-based themes. We support `data-mage-init`
attribute, `x-magento-init` scripts, we have jQuery-like widgets, views (our replacement
for uiComponents), and mixins. All of this preserves the same level of flexibility
as you had in Luma themes.

## JS stack

Here is what we use in Breeze:

 - [cash](https://github.com/fabiospampinato/cash) --- jQuery replacement.
 - [knockout](https://knockoutjs.com/) --- Yes.
 - [turbolinks](https://github.com/turbolinks/turbolinks) --- SPA.
 - [underscore](https://underscorejs.org/) --- Useful js functions.

## Dependencies

Since Breeze doesn't use modern JS techniques to load js dependencies, you will
work with [global js variables](globals).

## Theme entry points

Breeze provides ready-to-use JS entry points for theme development. Just create
one of the following files inside your custom theme, and it will be automatically
added to the page:

```
<theme_dir>/
└── web/
    └── js/
        └── breeze/
            ├── custom.js
            └── extend.js
```

 - Use `extend.js` file if you are the custom theme developer.
 - Use `custom.js` file if you are the Breeze theme end-user.

## Module entry points

There are no ready-to-use entry points for module development. You should
register module components using `breeze_default.xml` layout update as described
in [JS Components](components) section.
