---
layout: docs
title: Structure
description: Theme folder structure
order: 100
---

# Theme Structure

Breeze theme structure is well known for every Magento developer. We've only added
a new entry points for custom styles and custom scripts:

```
<theme_dir>/
├── <Vendor>_<Module>/
│   ├── web/
│   ├── layout/
│   └── templates/
├── etc/
│   └── view.xml
├── i18n/
├── media/
├── web/
│   ├── css/
│   ├── images/
│   └── js/
├── composer.json
├── registration.php
└── theme.xml
```

Path                    | Description
------------------------|--------------------------
`<Vendor>_<Module>/`    | Module-related changes.
`etc/view.xml`          | Basic theme output settings: image dimensions, gallery settings, responsive images, etc.
`i18n`                  | Translations
`media`                 | Theme screenshots
`web/css`               | Styles
`web/js`                | JS components
`composer.json`         | PHP package file
`registration.php`      | Theme registration file
`theme.xml`             | Theme name, parent theme code, etc.
