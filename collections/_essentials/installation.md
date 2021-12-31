---
layout: default
title: Installation
description: Breeze installation instructions
order: 200
---

# Installation

## Pre-Installation

Installation requires [swissup/marketplace](https://github.com/swissup/module-marketplace) module.
It’s our module that register our packages repository in the composer.json file,
saves its credentials to the auth.json file, and provides one-click theme installer.

Here is a commands that will download and enable Marketplace module, and then
activate our packages repository:

```powershell
composer require swissup/module-marketplace &&\
bin/magento setup:upgrade &&\
bin/magento marketplace:channel:enable swissuplabs
```

## Installation

When Marketplace module is installed, proceed with the following commands to
install and enable Breeze package:

```powershell
bin/magento marketplace:package:require swissup/breeze-blank &&\
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
