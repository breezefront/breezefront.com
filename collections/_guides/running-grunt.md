---
layout: docs
title: Running Grunt
description: Developing theme using grunt tool
order: 700
---

# Running Grunt

* TOC
{:toc}

## About

Grunt tool is used by Magento to improve frontend developer experience. It allows
you to see where some particular style is coming from, and autoregenerate
styles when you save the `less` files.

## Install grunt

 1. Install [node.js](https://nodejs.org/en/download/) on your machine.
 2. Install grunt CLI tool:

    ```bash
    npm install -g grunt-cli
    ```

 3. Create files for grunt and install dependencies:

    ```bash
    cd <magento_root>

    cp package.json.sample package.json &&\
    cp Gruntfile.js.sample Gruntfile.js &&\
    cp grunt-config.json.sample grunt-config.json &&\
    npm update
    ```

## Prepare config

 1. Create `local-themes.js` in the `dev/tools/grunt/configs` directory:

    ```bash
    cp dev/tools/grunt/configs/themes.js dev/tools/grunt/configs/local-themes.js
    ```

 2. Add breeze themes to the newly created `local-themes.js` file:

    ```js
    'breeze-blank': {
        area: 'frontend',
        name: 'Swissup/breeze-blank',
        locale: 'en_US',
        files: [
            'css/default',
            'css/checkout',
            'css/deferred-default',
            'css/deferred-checkout',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    'breeze-evolution': {
        area: 'frontend',
        name: 'Swissup/breeze-evolution',
        locale: 'en_US',
        files: [
            'css/default',
            'css/checkout',
            'css/deferred-default',
            'css/deferred-checkout',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    }
    ```

 3. Optionally, enable inline source maps in `dev/tools/grunt/configs/less.js`:

    ```diff
    --- dev/tools/grunt/configs/less.js
    +++ dev/tools/grunt/configs/less.js
    @@ -22,6 +22,7 @@
             sourceMap: true,
             strictImports: false,
             sourceMapRootpath: '/',
    +        sourceMapFileInline: 'true',
             dumpLineNumbers: false, // use 'comments' instead false to output line comments for source
             ieCompat: false
         },
    ```

## Running grunt

> Do not forget to replace `breeze-evolution` with your theme

```powershell
grunt clean:breeze-evolution &&\
grunt exec:breeze-evolution &&\
grunt less:breeze-evolution &&\
grunt watch
```

Result:

![Screenshot](https://user-images.githubusercontent.com/306080/213136024-170325fd-bbfd-487f-92da-7b32dfe84355.png)
