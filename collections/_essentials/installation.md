---
layout: default
title: Installation
description: Breeze installation instructions
order: 200
---

# Installation

## Pre-Installation

 1. Install [swissup/marketplace](https://github.com/swissup/module-marketplace) module:

    ```powershell
    composer require swissup/module-marketplace &&\
    bin/magento setup:upgrade
    ```

    > `swissup/marketplace` --- is the module that registers our packages repository
    > in the composer.json file, saves credentials to the auth.json file, and provides
    > one-click theme installer.

 2. Complete a free purchase of [Breeze Blank Theme](https://swissuplabs.com/magento-themes/magento-2-breeze-blank-theme.html)
 3. Enable swissuplabs packages channel using `swissup/marketplace` module:

    ```powershell
    bin/magento marketplace:channel:enable swissuplabs
    ```

    You’ll be asked to activate your domain and enter identity key. Get identity
    key and activate the domain at
    [swissuplabs.com customer account page](https://swissuplabs.com/license/customer/activation/)

## Installation

When Marketplace module is installed, proceed with the following commands to
download and enable Breeze package:

```powershell
composer require swissup/breeze-blank &&\
bin/magento setup:upgrade &&\
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to the `swissup/theme-frontend-breeze-blank`.

The list of packages that will be installed:

Package Name                            | Description
----------------------------------------|--------------
swissup/theme-frontend-breeze-blank     | Breeze Blank Theme
swissup/module-breeze                   | Breeze Module
swissup/module-breeze-integrations      | Third-party modules integrations
swissup/module-rtl                      | RTL Direction Module
