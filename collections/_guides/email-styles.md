---
layout: default
title: Email Styles
description: How to add email styles using custom Breeze-based theme.
order: 400
---

# Email styles

> Email styles using the same features as general styles, except you don't
> need to use `critical` guards around your styles.

There are two entry points for custom email styles in Breeze theme:

 -  `email/_extend.less` --- Use this file if you are custom theme developer.
 -  `email/_custom.less` --- Use this file if you are end-user of the custom theme.

Create `_[extend|custom].less` file in `Local/breeze-custom/web/css/email` folder.
This file will be included automatically during email processing.

Here is how directory structure may look like for `Local/breeze-custom` theme:

```
Local/breeze-custom/
├── Magento_Email
│   └── web/
│       └── logo_email.png
├── web/
│   └── css/
│       └── email/
│           └── _extend.less
├── composer.json
├── registration.php
└── theme.xml
```

Here is an example of custom `_extend.less`:

```scss
@brand: @rose-600;
@email-body__width: @xs;
@email__background-color: @rose-100;
@button__padding: @2 @6;

.email-non-inline() {
    @media @media-sm-down {
        html,
        body {
            background: @white !important;
        }
    }
}
```
