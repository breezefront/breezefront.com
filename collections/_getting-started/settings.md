---
layout: docs
title: Settings
description: Breeze settings
order: 300
---

# Settings

Breeze lets you configure some options.

 1. Login to Magento backend and open _Content > Design > Configuration_ page.
 2. Select the Store you want to change and press _Edit_.
 3. Scroll down to the _Breeze_ fieldset.

<details>
    <summary>View Screenshot</summary>
    <img src="{{ '/assets/img/settings.webp?v=2' | relative_url }}" width="656" height="955" class="!m-0" alt="Settings Screenshot" loading="lazy"/>
</details>

Here is a list of available options:

Option                              | Description
------------------------------------|-------------------------
Enable Breeze Experience            | Allows to disable Breeze Module. Useful when using Breeze Module for Luma or other third-party non-breeze theme.
Disable Breeze for specified URLs   | Ability to specify URLs where Breeze Module should be disabled. Useful for third-party module pages that use custom uiComponents (knowledgebase, helpdesk, etc).
Exceptions for Disable Breeze URLs  | Ability to specify URLs where Breeze Module should NOT be disabled.
Enable Responsive Images            | Serve most suitable image size per device. Theme developer must describe srcset property in theme's view.xml file in order to enable this feature.
Debug Mode                          | When enabled, allows to force Breeze Module status via query parameter: `?breeze=1` or `?breeze=0`
Better Compatibility                | Ability to enable [better compatibility](better-compatibility) for all modules.
Excluded from Better Compatibility  | Exclude specified scripts from better compatibility mode.

Some options use `Use Theme Config` value as default. This means that the value
will be taken from view.xml file of the active theme if found. It's very useful
for Breeze-based themes, as they can activate Breeze module and other options
automatically.
