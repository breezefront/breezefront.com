---
layout: docs
title: Scroll Reveal
description: Scroll reveal animations
---

# Scroll Reveal Animations

* TOC
{:toc}

## About

We've added most popular animations to Breeze themes and made them customizable,
so you can easily use it in your custom development!

Scroll animation adds nice reveal effect for all elements with `scroll-reveal` css
class name and [few more elements](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_default.xml#L645-L657){:target="_blank" rel="noopener"}
that appears in the viewport.

Source Code:

 - [Script](https://github.com/breezefront/module-breeze/blob/master/view/frontend/templates/theme/scroll-reveal.phtml){:target="_blank" rel="noopener"}
 - [CSS](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/css/source/components/_scroll-reveal.less){:target="_blank" rel="noopener"}

## Enable

> If you are using Evolution theme, scroll reveal is
> [enabled by default](https://github.com/breezefront/theme-frontend-breeze-evolution/blob/master/Magento_Theme/layout/default.xml#L7-L14){:target="_blank" rel="noopener"}.

To enable reveal animations, add the following code to
`<theme>/Magento_Theme/layout/default.xml` layout update file:

```xml
<referenceBlock name="breeze.scrollReveal">
    <arguments>
        <argument name="enabled" xsi:type="boolean">true</argument>
    </arguments>
</referenceBlock>
```

## Plain HTML

Typical markup examples for scroll reveal animation:

```html
<!-- Animate scroll-reveal elements -->
<div class="grid grid-cols-2">
    <div>
        <h2 class="scroll-reveal">Wow!</h2>
        <p class="scroll-reveal">Whoa!</p>
    </div>
    <div>
        <h2 class="scroll-reveal">Hello!</h2>
        <p class="scroll-reveal">Привіт!</p>
    </div>
</div>

<!-- Animate all children -->
<div class="scroll-reveal-children">
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
```

Breeze calculates animation delay for each of appeared element to get nice
cascade effect. Sometimes you may want to tell Breeze to start animation delay
from start regardless of previously appeared elements. You can use
`scroll-reveal-cascade` css class for this:

```html
<div class="grid grid-cols-2">
    <div class="scroll-reveal-cascade">
        <h2 class="scroll-reveal">Wow!</h2>
        <p class="scroll-reveal">Whoa!</p>
    </div>
    <div class="scroll-reveal-cascade">
        <h2 class="scroll-reveal">Hello!</h2>
        <p class="scroll-reveal">Привіт!</p>
    </div>
</div>
```

## Pagebuilder

Breeze will animate the following elements if you add `scroll-reveal-container`
class name to parent element ("Row" for example):

 -  Headings
 -  Banner content and buttons
 -  Slider content and buttons
 -  Columns
 -  Buttons

## Animate custom selectors

By default, only elements with `scroll-reveal` class name and
[few more elements](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_default.xml#L645-L657){:target="_blank" rel="noopener"}
will use reveal animation.

You can pass additional selectors using layout update xml to animate any custom
element:

```xml
<referenceBlock name="breeze.scrollReveal">
    <arguments>
        <argument name="enabled" xsi:type="boolean">true</argument>
        <argument name="selectors" xsi:type="array">
            <item name="theme-newsletter" xsi:type="string">.footer-top .newsletter .title, .footer-top .newsletter .content</item>
        </argument>
    </arguments>
</referenceBlock>
```
