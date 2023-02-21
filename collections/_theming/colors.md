---
layout: docs
title: Colors
description: Colors
---

# Colors

* TOC
{:toc}

## Brand colors

```scss
@theme__brand-color: @blue-600;
@theme__dark-color: @slate-900;
```

## Base text

```scss
@base__text-color: @gray-900;
@base__background-color: @white;
@muted__background-color: @gray-100;

@headings__text-color: var(--base-color);
@link__text-color: var(--blue);
@ring__text-color: var(--brand-color);

@selection__color: false;
@selection__background: false;
```

## Messages

View all messages variables at the [messages page](messages).

```scss
@global-message__background: ~"rgb(var(--yellow))";
@global-message__color: #222;

@message__background: ~"rgb(var(--message-bg))";
@message__color: ~"rgb(var(--message-color))";
@message__border-color: ~"rgb(var(--message-border-color, var(--message-color)), var(--message-border-alpha, .1))";
...
```

## Blocks

View all blocks variables at the [blocks page](blocks).

```scss
@block-title__text-color: var(--base-color);
@block-title__background-color: false;
@block-content__background-color: false;

@content-block-title__color: false;
@content-block-title__background: false;

@hero-block-title__color: false;
@hero-block-title__background: false;
```

## Form

View all form variables at the [form page](form).

```scss
@input__text-color: var(--base-color);
@input__background-color: var(--base-bg);
@input__focus__background-color: false;
@input__focus__border-color: var(--brand-color);

@checkbox__text-color: @input__focus__border-color;

@button__text-color: @white;
@button__background-color: var(--brand-color);
@button__border-color: var(--button-bg);
...
```

## Header

View all header variables at the [header page](header).

```scss
@header__dark: false;
@header__background: false;

@header-panel__background: false;
@header-panel__color: false;

@header-actions__color: false;
...
```

## Footer

View all footer variables at the [footer page](footer).

```scss
@footer__dark: false;
@footer__background: false;

@footer-top__dark: false;
@footer-top__background: false;

@footer-newsletter-input__border-color: false;
@footer-newsletter-input__background-color: false;
...
```

## Email colors

View all email variables at the [email page](form).

```scss
@ring__color: @theme__brand-color;
@brand__color: @theme__brand-color;
@danger__color: @red;
@info__color: @blue;
@success__color: @green;

@base__color: @gray-900;
@muted__color: @gray-400;
@divider__color: @gray-100;
@base__background: @white;
@muted__background: @gray-50
...
```

## Inverted colors

Inverted colors are used for [header](header) or [footer](footer) when dark 
variable is enabled. You can also invert colors using `color-invert` CSS class.

```scss
@base__inverted__text-color: @white;
@base__inverted__text-alpha: .85;
@headings__inverted__text-color: @base__inverted__text-color;
@headings__inverted__text-alpha: .9;
@link__inverted__text-color: @blue-300;
@link__inverted__text-alpha: .9;
@ring__inverted__text-color: @base__inverted__text-color;
@ring__inverted__text-alpha: .7;
@muted__inverted__background-color: @white;
@muted__inverted__background-alpha: .05;
@button__inverted__background-color: false;
@button__inverted__border-color: @button__inverted__background-color;
@button__inverted__text-color: false;
@input__inverted__background-color: false;
@input__inverted__background-alpha: 0;
@input__inverted__border-color: false;
@input__inverted__border-alpha: .5;
```
