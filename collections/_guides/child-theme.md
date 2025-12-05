---
layout: docs
title: Child Theme
description: How to create custom Breeze-based theme.
order: 100
---

# Child theme

* TOC
{:toc}

## About

In this guide we will create a new Breeze-based theme called "Local/breeze-custom"
and then activate it for selected store view.

## Create new theme

Open your terminal and run the following command undex Magento root directory:

```
bin/magento breeze:theme:create local/theme-frontend-breeze-custom
```

This command will ask you to choose parent theme. Select `Breeze Evolution`
or `Breeze Blank` from the list and proceed.

Optionally, you can pass the parent theme:

```
bin/magento breeze:theme:create local/theme-frontend-breeze-custom --parent=Swissup/breeze-evolution
```

## Activate theme

Login to the Magento backend and navigate to _Content > Design > Configuration_.
Select the store view you want to apply the theme and press **Edit**.

Select `BreezeCustom` in the **Applied Theme** dropdown and save the config.

---

That's all. You are now using your own custom theme and can override templates,
[add new styles](custom-styles), apply layout updates, and
[change images settings](image-dimensions).
