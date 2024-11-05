---
layout: docs
title: Upgrade Guide
description: How to upgrade between major Breeze updates
order: 5000
---

# Upgrade Guide

## Upgrading from 2.18.0 to 2.19.0

Update `swissup/theme-frontend-breeze-blank` to version 2.19:

```bash
composer update swissup/theme-frontend-breeze-blank -W
```

Search and replace deprecated variables inside your theme folder:

Old Name                                    | New Name
--------------------------------------------|------------------------------------------
@listing-swatch-wrapper__media-hidden       | @swatch-wrapper__listing__media-hidden
@listing-swatch-wrapper__margin             | @swatch-wrapper__listing__margin
@listing-swatch-options__margin-bottom      | @swatch-options__listing__margin-bottom
@listing-swatch-options__justify-content    | @swatch-options__listing__justify-content
@listing-swatch-options__min-height         | @swatch-options__listing__min-height
@listing-swatch__font-size                  | @swatch__listing__font-size
@listing-swatch__font-weight                | @swatch__listing__font-weight
@listing-swatch__size                       | @swatch__listing__size
@listing-swatch__gap                        | @swatch__listing__gap
@listing-swatch__border-offset              | @swatch__listing__border-offset
@listing-swatch__text__size                 | @swatch__text__listing__size

## Upgrading from 1.x.x to 2.x.x

### How to upgrade

 1. Update all Swissup modules

    ```sh
    composer update "swissup/*"
    ```

 2. Update Breeze module or theme to version 2.0

    > Edit this command and leave the packages you use:

    ```sh
    composer require -w swissup/breeze:^2.0 \
        swissup/breeze-blank:^2.0 \
        swissup/breeze-evolution:^2.0
    ```

### Breaking Changes

 1. Dark color scheme is disabled by default now. If you wish to enable this feature,
    you need to add `@respect-color-scheme: true;` to your [custom.less file](custom-styles).

 2. Markup of header dropdown item was changed (`.switcher` wrapper was added)
    to match language and currency switcher dropdowns. This allows to 
    [move customer dropdown menu to header panel](header#layout-update) if needed.
    If your custom theme used `.header.content > .actions > .action` selector for
    some styles, you need to update it with
    `.header.content > .switcher > .actions > .action`.

 3. We've removed/renamed bunch of less variables to make it easier to maintain
    Breeze source code. The tables below shows each variable we've changed.

    1.x.x variable                            | 2.x.x replacement
    ------------------------------------------|--------------------------------------
    `@rgb-*`                                  | `These variables were completely removed`
    `@button__hover__color`                   | `@button__hover__text-color`
    `@button__focus__color`                   | `@button__focus__text-color`
    `@button-primary__hover__color`           | `@button-primary__hover__text-color`
    `@button-secondary__hover__color`         | `@button-secondary__hover__text-color`
    `@message-success__color`                 | `@message-success__text-color`
    `@message-success__background`            | `@message-success__background-color`
    `@message-info__color`                    | `@message-info__text-color`
    `@message-info__background`               | `@message-info__background-color`
    `@message-error__color`                   | `@message-error__text-color`
    `@message-error__background`              | `@message-error__background-color`
    `@minisearch-input--border-color`         | `@minisearch-input__border-color`
    `@minisearch-input--background`           | `@minisearch-input__background-color`
    `@minisearch-button--background`          | `@minisearch-button__background-color`
    `@minisearch-button--color`               | `@minisearch-button__text-color`
    `@minisearch-button--focus--background`   | `@minisearch-button__focus__background-color`
    `@footer-newsletter-input--border-color`  | `@footer-newsletter-input__border-color`
    `@footer-newsletter-input--background`    | `@footer-newsletter-input__background-color`
    `@inverted--base-color`                   | `@base__inverted__text-color`
    `@inverted--base-alpha`                   | `@base__inverted__text-alpha`
    `@inverted--headings-alpha`               | `@headings__inverted__text-alpha`
    `@inverted--link-color`                   | `@link__inverted__text-color`
    `@inverted--link-alpha`                   | `@link__inverted__text-alpha`
    `@inverted--ring-color`                   | `@ring__inverted__text-color`
    `@inverted--ring-alpha`                   | `@ring__inverted__text-alpha`
    `@inverted--muted-bg`                     | `@muted__inverted__background-color`
    `@inverted--muted-bg-alpha`               | `@muted__inverted__background-alpha`
    `@inverted--button-bg`                    | `@button__inverted__background-color`
    `@inverted--button-border-color`          | `@button__inverted__border-color`
    `@inverted--button-color`                 | `@button__inverted__text-color`
    `@inverted--input-bg`                     | `@input__inverted__background-color`
    `@inverted--input-bg-alpha`               | `@input__inverted__background-alpha`
    `@inverted--input-border-color`           | `@input__inverted__border-color`
    `@inverted--input-border-alpha`           | `@input__inverted__border-alpha`
    `@product-stock__color`                   | `@product-stock__text-color`
    `@product-stock__background`              | `@product-stock__background-color`
    `@product-stock-available__color`         | `@product-stock-available__text-color`
    `@product-stock-available__background`    | `@product-stock-available__background-color`
    `@product-stock-unavailable__color`       | `@product-stock-unavailable__text-color`
    `@product-stock-unavailable__background`  | `@product-stock-unavailable__background-color`
    `@listing-grid-item__aspect-ratio`        | `@listing-grid-item__reveal-on-hover__aspect-ratio`
    `@listing-grid-item__details-height`      | `@listing-grid-item__reveal-on-hover__visible-height`
    `@listing-grid-item-actions-primary__opacity`   | `@listing-grid-item-actions-primary__absolute__opacity`
    `@listing-grid-item-actions-primary__z-index`   | `@listing-grid-item-actions-primary__absolute__z-index`
    `@listing-grid-item-actions-primary__top`       | `@listing-grid-item-actions-primary__absolute__top`
    `@listing-grid-item-actions-primary__left`      | `@listing-grid-item-actions-primary__absolute__left`
    `@listing-grid-item-actions-primary__right`     | `@listing-grid-item-actions-primary__absolute__right`
    `@listing-grid-item-actions-primary__transform` | `@listing-grid-item-actions-primary__absolute__transform`
    `@listing-grid-item-actions-primary__visible__transform` | `@listing-grid-item-actions-primary__absolute__visible__transform`
    `@listing-grid-item-tocart--color`        | `@listing-grid-item-tocart__absolute__text-color`
    `@listing-grid-item-tocart--bg-alpha`     | `@listing-grid-item-tocart__absolute__background-alpha`
    `@listing-grid-item-tocart--bg`           | `@listing-grid-item-tocart__absolute__background-color`
    `@listing-grid-item-tocart__border-color`    | `@listing-grid-item-tocart__absolute__background-color`
    `@listing-grid-item-tocart__hover--bg-alpha` | `@listing-grid-item-tocart__absolute__hover__background-alpha`
    `@listing-grid-item-tocart__box-shadow`      | `@listing-grid-item-tocart__absolute__box-shadow`
    `@listing-grid-item-tocart__font-weight`     | `@listing-grid-item-tocart__absolute__font-weight`
    `@listing-grid-item-tocart__text-transform`  | `@listing-grid-item-tocart__absolute__text-transform`
    `@listing-grid-item-actions-secondary__flex-direction`   | `@listing-grid-item-actions-secondary__absolute__flex-direction`
    `@listing-grid-item-actions-secondary__z-index`          | `@listing-grid-item-actions-secondary__absolute__z-index`
    `@listing-grid-item-actions-secondary__top`              | `@listing-grid-item-actions-secondary__absolute__top`
    `@listing-grid-item-actions-secondary__left`             | `@listing-grid-item-actions-secondary__absolute__left`
    `@listing-grid-item-actions-secondary__transform`        | `@listing-grid-item-actions-secondary__absolute__transform`
    `@listing-grid-item-actions-secondary__visible__transform` | `@listing-grid-item-actions-secondary__absolute__visible__transform`
