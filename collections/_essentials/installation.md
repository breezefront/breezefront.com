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

Install [swissup/marketplace](https://github.com/swissup/module-marketplace) module.
We will use it to run one-click theme installer in the end of installation.

```powershell
composer require swissup/module-marketplace &&\
bin/magento setup:upgrade --safe-mode=1
```

## Installation

When Marketplace module is installed, proceed with the following commands to
download and enable Breeze package.

Replace `swissup/breeze-blank` with theme you'd like to install:

 - Breeze Blank --- `swissup/breeze-blank`
 - Breeze Evolution --- `swissup/breeze-evolution`

```powershell
composer require swissup/breeze-blank &&\
bin/magento setup:upgrade --safe-mode=1 &&\
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.

No additional action is required, however, you can customize some config
options if you want.
