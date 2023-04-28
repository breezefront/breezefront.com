---
layout: docs
title: Calendar
description: Date field with calendar popup
---

# Calendar

* TOC
{:toc}

## About

Calendar --- is a js widget that turns regular text field into date field with
calendar. Unlike default Luma theme we use native calendar provided by the browser.

[View Source Code](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/calendar.js){:target="_blank" rel="noopener"}

## Initialization

```js
$('.selector').calendar();
```

## Options

Here is a list of calendar options:

```js
$(el).calendar({
    maxDate: '+1M +10D',
    minDate: '-1Y',
    dateFormat: 'M/dd/y',
    showsTime: false,
});
```

> Please note, that `dateFormat` affects the format of the date that will be sent 
> to the server only. You can't change the format visible to the user due to browser
> limitations.
