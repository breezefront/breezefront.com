---
layout: default
title: Configuration
description: Breeze configuration options
order: 300
---

# Configuration

Breeze lets you configure some options.

 1. Login to Magento backend and open _Content > Design > Configuration_ page.
 2. Select the Store you want to change and press _Edit_.
 3. Scroll down to the _Breeze_ fieldset.

Here is a list of available options:

Option                              | Description
------------------------------------|-------------------------
Enable Breeze Experience            | Allows to disable Breeze Module. Useful when using Breeze Module for Luma or other third-party non-breeze theme.
Disable Breeze for specified URLs   | Ability to specify URLs where Breeze Module should be disabled. Useful for third-party module pages that use custom uiComponents (knowledgebase, helpdesk, etc).
Enable Turbo Feature                | Allows to enable single-page application experience.
Enable Responsive Images            | Serve most suitable image size per device. Theme developer must describe srcset property in theme's view.xml file in order to enable this feature.
Debug Mode                          | When enabled, allows to force Breeze Module status via query parameter: `?breeze=1` or `?breeze=0`

Some options use `Use Theme Config` value as default. This means that the value
will be taken from view.xml file of the active theme if found. It's very useful
for Breeze-based themes, as they can activate Breeze module and other options
automatically.
