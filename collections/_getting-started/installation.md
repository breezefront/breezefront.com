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
composer require swissup/module-marketplace
bin/magento setup:upgrade --safe-mode=1
```

## Installation

When Marketplace module is installed, proceed with the following commands to
download and enable Breeze Theme.

Select the package to install:

<fieldset aria-label="Package" class="border border-gray-200 rounded-md">
  <div class="divide-y divide-gray-200 dark:divide-white/10">
    <div class="relative flex items-start p-4 py-3 has-checked:bg-gray-100">
      <div class="flex h-6 items-center">
        <input id="breeze-module" type="radio" name="package" aria-describedby="breeze-module-description" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-gray-600 checked:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-gray-500 dark:checked:bg-gray-500 dark:focus-visible:outline-gray-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
      </div>
      <div class="ml-3 text-sm/6">
        <label for="breeze-module" class="font-medium text-gray-900 dark:text-white">
            Breeze Module
            <span class="absolute inset-0"></span>
        </label>
        <p id="breeze-module-description" class="!m-0 text-gray-500 dark:text-gray-400">
            To use with Luma-based theme
            <a href="https://breeze.swissupdemo.com/default/" tabindex="-1" target="_blank" rel="noopener">View demo</a>
        </p>
      </div>
    </div>
    <div class="relative flex items-start p-4 py-3 has-checked:bg-gray-100">
      <div class="flex h-6 items-center">
        <input id="breeze-blank" type="radio" name="package" aria-describedby="breeze-blank-description" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-gray-600 checked:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-gray-500 dark:checked:bg-gray-500 dark:focus-visible:outline-gray-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
      </div>
      <div class="ml-3 text-sm/6">
        <label for="breeze-blank" class="font-medium text-gray-900 dark:text-white">
            Blank Theme
            <span class="absolute inset-0"></span>
        </label>
        <p id="breeze-blank-description" class="!m-0 text-gray-500 dark:text-gray-400">
            Start building your store from scratch
            <a href="https://breeze.swissupdemo.com/breeze_blank/" tabindex="-1" target="_blank" rel="noopener">View demo</a>
        </p>
      </div>
    </div>
    <div class="relative flex items-start p-4 py-3 has-checked:bg-gray-100">
      <div class="flex h-6 items-center">
        <input id="breeze-evolution" type="radio" name="package" checked aria-describedby="breeze-evolution-description" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-gray-600 checked:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-gray-500 dark:checked:bg-gray-500 dark:focus-visible:outline-gray-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
      </div>
      <div class="ml-3 text-sm/6">
        <label for="breeze-evolution" class="font-medium text-gray-900 dark:text-white">
            Evolution Theme
            <span class="absolute inset-0"></span>
        </label>
        <p id="breeze-evolution-description" class="!m-0 text-gray-500 dark:text-gray-400">
            Modern theme built on top of Breeze Blank
            <a href="https://breeze.swissupdemo.com/breeze_evolution/" tabindex="-1" target="_blank" rel="noopener">View demo</a>
        </p>
      </div>
    </div>
    <div class="relative flex items-start p-4 py-3 has-checked:bg-gray-100">
      <div class="flex h-6 items-center">
        <input id="breeze-enterprise" type="radio" name="package" aria-describedby="breeze-enterprise-description" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-gray-600 checked:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-gray-500 dark:checked:bg-gray-500 dark:focus-visible:outline-gray-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
      </div>
      <div class="ml-3 text-sm/6">
        <label for="breeze-enterprise" class="font-medium text-gray-900 dark:text-white">
            Enterprise Theme
            <span class="absolute inset-0"></span>
        </label>
        <p id="breeze-enterprise-description" class="!m-0 text-gray-500 dark:text-gray-400">
            Paid premium theme with additional features
            <a href="https://breezeenterprise.swissupdemo.com/" tabindex="-1" target="_blank" rel="noopener">View demo</a>
        </p>
      </div>
    </div>
  </div>
</fieldset>


<div markdown="1" class="hidden [body:has(#breeze-module:checked)_&]:block">

```powershell
composer require swissup/breeze
bin/magento setup:upgrade --safe-mode=1
```

Then, proceed to the [settings](/docs/settings/) and use "Enable Breeze Experience" option to
enable Breeze theme for your store view.

</div>

<div markdown="1" class="hidden [body:has(#breeze-blank:checked)_&]:block">

```powershell
composer require swissup/breeze-blank
bin/magento setup:upgrade --safe-mode=1
bin/magento marketplace:package:install swissup/breeze-blank
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.
</div>

<div markdown="1" class="hidden [body:has(#breeze-evolution:checked)_&]:block">

```powershell
composer require swissup/breeze-evolution
bin/magento setup:upgrade --safe-mode=1
bin/magento marketplace:package:install swissup/breeze-evolution
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.
</div>

<div markdown="1" class="hidden [body:has(#breeze-enterprise:checked)_&]:block">

```powershell
bin/magento marketplace:channel:enable swissuplabs
composer require swissup/breeze-enterprise
bin/magento setup:upgrade --safe-mode=1
bin/magento marketplace:package:install swissup/breeze-enterprise
```

Installer will ask you to select a store, then it will create CMS content, and
change your current theme to Breeze.

**That's all.** Breeze is now installed and activated for the selected store view.
</div>

## Configuration

This step is optional but highly recommended. Enable **Better Compatibility**
mode at the [Breeze Settings](settings) page.
