---
layout: default
title: Custom Scripts
description: How to add custom javascript to the Breeze-based theme.
order: 210
---

# Custom Scripts

> Make sure to [create and change](/child-theme) your theme to `Local/breeze-custom`
> before start.

There are two built-in entry points for custom scripts in Breeze theme:

 -  `extend.js` --- Use this file if you are custom theme developer.
 -  `custom.js` --- Use this file if you are end-user of the custom theme.

Create `[extend|custom].js` file in `Local/breeze-custom/web/js/breeze` folder.
This file will be included automatically at all pages.

Example:

```js
(function () {
    'use strict';

    $(document).on('breeze:load', function () {
        console.log('Hello');
    });
})();
```

Here is how directory structure will look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── web/
│   └── js/
│       └── breeze/
│           ├── custom.js
│           └── extend.js
├── composer.json
├── registration.php
└── theme.xml
```
