---
layout: docs
title: Tabs
description: Tabs
---

# Tabs

* TOC
{:toc}

## About

Tabs --- is a [widget component](widgets) to show content in multiple panels,
each associated with a header in a list.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/ui/tabs.js){:target="_blank" rel="noopener"}

## Initialization

Static HTML initialization:

```html
{% raw %}<div data-content-type="tabs" data-mage-init='{"tabs": {}}'>
    <div class="tab-header" data-role="collapsible">
        <a data-toggle="trigger" href="#tab-cars">Cars</a>
    </div>
    <div id="tab-cars" data-role="content">Cars content</div>

    <div class="tab-header" data-role="collapsible">
        <a data-toggle="trigger" href="#tab-movies">Movies</a>
    </div>
    <div id="tab-movies" data-role="content">Movies content</div>

    <div class="tab-header" data-role="collapsible">
        <a data-toggle="trigger" href="#tab-music">Music</a>
    </div>
    <div id="tab-music" data-role="content">Music content</div>
</div>{% endraw %}
```

JS initialization:

```js
$('.selector').tabs();
```

## Options

Here is a list of tabs options:

```js
$(el).tabs({
    active: 0,
    collapsibleElement: '[data-role=collapsible]',
    header: '[data-role=title]',
    content: '[data-role=content]',
    trigger: '[data-role=trigger]'
});
```
