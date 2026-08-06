---
layout: docs
title: Form
description: HTML forms customization
---

# Form

* TOC
{:toc}

## LESS mixins

### Input

```scss
.breeze-input();
.breeze-input-xs();
.breeze-input-lg();
.breeze-input-xl();
```

Usage example:

```scss
selector {
    &:extend(.breeze-input all);
    &:extend(.breeze-input-xl all);
}
```

### Button

```scss
.breeze-button();
.breeze-button-primary();
.breeze-button-secondary();
.breeze-button-link();
.breeze-button-ghost();
.breeze-button-reset();
.breeze-button-close();
.breeze-button-xs();
.breeze-button-lg();
.breeze-button-xl();
```

Usage example:

```scss
selector {
    &:extend(.breeze-button all);
    &:extend(.breeze-button-xs all);
}
```

## LESS variables

### Input

```scss
@theme__brand-color: @blue-600;
@theme__dark-color: @slate-900;

@input__font-family: false;
@input__text-color: var(--base-color);
@input__background-color: var(--base-bg);
@input__padding: @2 @3;
@input__border-width: 1px;
@input__border-color: @gray-400;
@input__border-radius: 0;
@input__focus__background-color: false;
@input__focus__border-color: var(--brand-color);
@input__focus__shadow-spread: 1px;
@input__focus__outline-color: var(--input-border-color);
@input__focus__outline-alpha: 0;
@input__focus__outline-offset: 2px;

@input__lg__font-weight: false;
@input__lg__padding: false;

@input__xl__font-weight: false;
@input__xl__padding: @3 @3;
```

### Select

```scss
@select__padding-right: @10;
```

### Checkbox

```scss
@checkbox__size: @4;
@checkbox__border-radius: @input__border-radius;
@checkbox__text-color: @input__focus__border-color;
```

### Button

```scss
@theme__brand-color: @blue-600;
@theme__dark-color: @slate-900;

@button__font-weight: 400;
@button__font-family: false;
@button__font-size: false;
@button__text-color: @white;
@button__background-color: var(--brand-color);
@button__background-alpha: 1;
@button__border-width: @input__border-width;
@button__border-alpha: 0;
@button__border-color: var(--button-bg);
@button__border-radius: @input__border-radius;
@button__padding: @2 @5;
@button__shadow: false;
@button__text-decoration: none;
@button__text-transform: false;
@button__text-shadow: false;
@button__hover__text-color: false;
@button__hover__background-color: false;
@button__hover__background-alpha: .9;
@button__hover__border-color: @button__hover__background-color;
@button__hover__text-decoration: none;
@button__focus__text-color: false;
@button__focus__background-color: false;
@button__focus__border-color: @button__focus__background-color;
@button__focus__outline: 2px solid @ring__color;
@button__focus__outline-alpha: 1;
@button__focus__outline-offset: 2px;

@button-primary__hover__text-color: false;
@button-primary__hover__background-color: false;
@button-primary__hover__border-color: @button-primary__hover__background-color;

@button-secondary__text-color: var(--gray-600);
@button-secondary__background-color: var(--gray-200);
@button-secondary__border-color: var(--button-secondary-bg);
@button-secondary__hover__text-color: false;
@button-secondary__hover__background-color: false;
@button-secondary__hover__border-color: @button-secondary__hover__background-color;

@button__lg__font-size: @font-size__lg;
@button__lg__line-height: @line-height__lg;
@button__lg__font-weight: 500;
@button__lg__padding: false;

@button__xl__font-size: @font-size__xl;
@button__xl__line-height: @line-height__xl;
@button__xl__font-weight: 500;
@button__xl__padding: @3 @10;
```
