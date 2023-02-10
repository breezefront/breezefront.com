---
layout: docs
title: Dark Mode
description: Dark color scheme in Breeze Theme
order: 400
---

# Dark Mode

Dark mode support is disabled by default in Breeze Theme. To activate, you should 
add `@respect-color-scheme: true` variable to `_extend.less` or `_custom.less` file.

When enabled, and `prefers-color-scheme: dark` flag is found in visitor's browser 
settings Breeze Blank theme will serve dark theme variant automatically.

You can find Dark Mode variables in [`abstracts/variables/_dark.less`](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/variables/_dark.less)
file.
