---
layout: default
title: Installation
description: Breeze installation instructions
order: 200
---

# Installation

* TOC
{:toc}

## Pre-installation

 1. Install [swissup/marketplace](https://github.com/swissup/module-marketplace) module:

    ```powershell
    composer require swissup/module-marketplace &&\
    bin/magento setup:upgrade
    ```

    > `swissup/marketplace` --- is the module that registers our packages repository
    > in the composer.json file, saves credentials to the auth.json file, and provides
    > one-click theme installer.

 2. Purchase a theme you'd like to install:

    - [Breeze Blank](https://swissuplabs.com/magento-themes/magento-2-breeze-blank-theme.html) --- Free minimalistic starter theme ([View screenshots](/screenshots#breeze-blank)).
    - [Breeze Evolution](https://swissuplabs.com/magento-themes/magento-2-breeze-evolution-theme.html) --- Free full featured theme ([View screenshots](/screenshots#breeze-evolution)).

 3. Enable swissuplabs packages channel using `swissup/marketplace` module:

    ```powershell
    bin/magento marketplace:channel:enable swissuplabs
    ```

    You’ll be asked to activate your domain and enter identity key. Get identity
    key and activate the domain at
    [swissuplabs.com customer account page](https://swissuplabs.com/license/customer/activation/)

## Installation

When Marketplace module is installed, proceed with the following commands to
download and enable Breeze package.

Replace `swissup/breeze-blank` with theme you'd like to install:

 - Breeze Blank --- `swissup/breeze-blank`
 - Breeze Evolution --- `swissup/breeze-evolution`

```powershell
composer require swissup/breeze-blank &&\
bin/magento setup:upgrade &&\
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.

No additional action is required, however, you can customize some config
options if you want.
