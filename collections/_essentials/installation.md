---
layout: default
title: Installation
description: Breeze installation instructions
order: 200
---

# Installation

Run the following commands to install and enable bundled modules:

```powershell
composer require swissup/breeze-blank
bin/magento setup:upgrade
```

The list of packages that will be installed:

Package Name                            | Description
----------------------------------------|--------------
swissup/theme-frontend-breeze-blank     | Breeze Blank Theme
swissup/module-breeze                   | Breeze Module
swissup/module-breeze-integrations      | Third-party modules integrations
swissup/module-rtl                      | RTL Direction Module

## Setup

We recommend installing our [swissup/marketplace module](https://github.com/swissup/module-marketplace),
and run theme installer from command line:

```powershell
composer require swissup/module-marketplace
bin/magento setup:upgrade
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to the `swissup/theme-frontend-breeze-blank`.

## Manual setup

If you don't want to use installer from the section above, you should activate
Breeze manually.

 1. Login to Magento backend and open _Content > Design > Configuration_ page.
 2. Select the Store you want to change and press _Edit_.
 3. Select **Breeze Blank** theme in the _Applied Theme_ dropdown and save configuration.
 4. Navigate to _Content > Pages_ and create new homepage using Magento's Pagebuilder
    editor.
