---
layout: docs
title: CMS Elements
description: Collection of custom html elements.
order: 90
---

# CMS Elements

* TOC
{:toc}

## About

In this guide you'll find how to create various html coded elements that
are not available in Magento's Pagebuilder.

## Accordion

Looking for [collapsible component](#collapsible)?

```html
<div data-mage-init='{"accordion":{"active": -1}}'>
  <div data-role="collapsible">
    <span class="h4" data-role="title" data-trigger="true">Question 1</span>
    <div data-role="content" style="display:none">Content 1</div>
  </div>
  <div data-role="collapsible">
    <span class="h4" data-role="title" data-trigger="true">Question 2</span>
    <div data-role="content" style="display:none">Content 2</div>
  </div>
</div>
```

## Carousel Slider

> Magento's Pagebuilder allows to create slider with one slide per screen.
> Here is how you can create a slider with multiple slides per screen:

```html
<div data-content-type="slider" data-mage-init='{"Magento_PageBuilder/js/content-type/slider/appearance/default/widget":{"arrows": true, "dots": true}}'>
  <div class="slick-list" style="gap:15px">
    <div><img width="180" height="100" src="{% raw %}{{media url=image1.png}}{% endraw %}"/></div>
    <!-- ... -->
    <div><img width="180" height="100" src="{% raw %}{{media url=image8.png}}{% endraw %}"/></div>
  </div>
</div>
```

## Collapsible

Looking for [accordion component](#accordion)?

```html
<div data-mage-init='{"collapsible":{"active":false}}' data-collapsible="true">
  <span class="h4" data-role="title" data-trigger="true">Question 1</span>
  <div data-role="content">Content 1</div>
</div>
<div data-mage-init='{"collapsible":{"active":false}}' data-collapsible="true">
  <span class="h4" data-role="title" data-trigger="true">Question 2</span>
  <div data-role="content">Content 2</div>
</div>
```
