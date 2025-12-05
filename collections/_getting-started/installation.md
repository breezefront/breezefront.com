---
layout: docs
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

 <!-- - Breeze Module --- `swissup/breeze` [View demo](https://breeze.swissupdemo.com/default/){:target="_blank" rel="noopener"} -->
 - Breeze Blank Theme --- `swissup/breeze-blank` [View demo](https://breeze.swissupdemo.com/breeze_blank/){:target="_blank" rel="noopener"}
 - Breeze Evolution Theme --- `swissup/breeze-evolution` [View demo](https://breeze.swissupdemo.com/breeze_evolution/){:target="_blank" rel="noopener"}

```powershell
composer require swissup/breeze-blank &&\
bin/magento module:enable Swissup_Breeze Swissup_Rtl &&\
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.

## Configuration

This step is optional but highly recommended. Enable **Better Compatibility**
mode at the [Breeze Settings](settings) page.
