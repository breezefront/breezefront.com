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

## Declare new theme

 1. Open your terminal and navigate to `app/design/frontend` folder:

    ```bash
    cd <MAGENTO_ROOT>/app/design/frontend
    ```

 2. Create `Local/breeze-custom` folder and navigate inside:

    ```bash
    mkdir -p Local/breeze-custom && cd Local/breeze-custom
    ```

 3. Create `theme.xml` file:

    ```xml
    <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
        <title>Custom Breeze Theme</title>
        <parent>Swissup/breeze-blank</parent>
    </theme>
    ```

 4. Create `registration.php` file:

    ```php
    <?php

    use Magento\Framework\Component\ComponentRegistrar;

    ComponentRegistrar::register(
        ComponentRegistrar::THEME,
        'frontend/Local/breeze-custom',
        __DIR__
    );
    ```

## Activate theme

Login to the Magento backend and navigate to _Content > Design > Configuration_.
Select the store view you want to apply the theme and press **Edit**.

Select `Custom Breeze Theme` in the **Applied Theme** dropdown and save the config.

---

That's all. You are now using your own custom theme and can override templates,
[add new styles](custom-styles), apply layout updates, and
[change images settings](image-dimensions).
