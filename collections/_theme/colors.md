---
layout: default
title: Colors
description: Working with colors in Breeze theme
order: 310
disabled: true
---

# Colors

* TOC
{:toc}

## Color Palette

Breeze uses [Tailwind 3.0 default color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette).
Every color is declared as LESS variable in `web/css/abstracts/variables/_colors-lib.less`
file:

```scss
@gray-50: #f9fafb;
@gray-100: #f3f4f6;
// ...
@indigo-500: #6366f1;
// ...
@rose-800: #9f1239;
@rose-900: #881337;
```

We use gray, blue, green, red, and yellow colors only, however you may change
this by redefining base color variables using [`_extend.less` or `_custom.less`](/custom-styles)
files.


## Base colors

Every color used by Breeze Theme is declared in RGB format as LESS variable in
`web/css/abstracts/variables/_colors.less` file.

```scss
@rgb-brand: red(@theme__brand-color), green(@theme__brand-color), blue(@theme__brand-color);

@rgb-black: red(@black), green(@black), blue(@black);
@rgb-white: red(@white), green(@white), blue(@white);

@rgb-gray-50:  red(@gray-50),  green(@gray-50),  blue(@gray-50);
@rgb-gray-100: red(@gray-100), green(@gray-100), blue(@gray-100);
// ...
@rgb-gray-900: red(@gray-900), green(@gray-900), blue(@gray-900);

@rgb-blue:   red(@blue-700),   green(@blue-700),   blue(@blue-700);
@rgb-green:  red(@green-700),  green(@green-700),  blue(@green-700);
@rgb-red:    red(@red-700),    green(@red-700),    blue(@red-700);
@rgb-yellow: red(@yellow-400), green(@yellow-400), blue(@yellow-400);
```

These RGB strings used in `web/css/base/_variables.less` to declare CSS properties:

```scss
:root {
    --black: @rgb-black;
    --white: @rgb-white;

    --gray-50: @rgb-gray-50;
    --gray-100: @rgb-gray-100;
    // ...
    --gray-900: @rgb-gray-900;

    --red: @rgb-red;
    --green: @rgb-green;
    --blue: @rgb-blue;
    --yellow: @rgb-yellow;
}
```

Finally, we can compose CSS property and alpha-channel value into actual color
in Breeze styles as follows:

```scss
.element {
    color: ~"rgba(var(--green), var(--alpha-value, .85))";
}
```

Since we don't want to associate all html elements with actual color names to give
you a freedom to change component colors independently, we use one more level of color
variables --- component colors.

## Component colors

Component colors declared just like base colors, but they refer to the
CSS properties declared earlier.

```scss
@rgb-brand: var(--blue);
@rgb-danger: var(--red);
@rgb-success: var(--green);
@rgb-info: var(--blue);

@rgb-ring: var(--brand-color);
@rgb-link: var(--blue);
@rgb-base: var(--gray-900);
@rgb-base-bg: var(--white);
// ...
```

The existense of these variables allows to change individual component colors
without affecting base color values. Eg. you may want to change link color, but
keep brand color (focus-ring, buttons, spinner) without changes.

You may wonder why we use CSS properties as the values for component colors? It's
done for dark color scheme support, since we tweak base colors when detecting
`prefers-color-scheme: dark` setting in visitor's browser preferences.

> If you build a light theme only, you can use hex colors as usual. See
> examples below.

## Basic examples

### Changing theme color

This will change color of buttons and focus rings.

```scss
@theme__brand-color: @green-500;
```

### Changing form colors

```scss
@ring__color: @black;
@input__color: @gray-700;
@input__background: @gray-100;
@input__border: 1px solid @gray-500;
@input__focus__outline: 2px solid @black;
@input__focus__outline-offset: -1px;
@button__background: @indigo-600;
@button__hover__background: @violet-600;
@button__focus__background: @violet-600;
```
