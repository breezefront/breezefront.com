---
layout: docs
title: Image Dimensions
description: How to properly configure image dimensions for the Breeze Frontend
order: 300
---

# Setup Image Dimensions

* TOC
{:toc}

## About

In this guide, we will prepare images configuration for the custom Breeze theme. We'll
use our [Argento Force](https://argento-m2.swissupdemo.com/force_breeze/gear/bags.html)
theme as an example.

You should always pay attention to the proper image's configuration, as it
will make your store look much pleasant on modern HiDPI screens, and increase the
speed of the site since all visitors will not download too large images.

## Collect size rules

First, we need to write proper `sizes` rules for our theme. To do that
let's open our [category page](https://argento-m2.swissupdemo.com/force_breeze/gear/bags.html)
and write down which image width browser wants to show per each breakpoint:

Screen width (min-max)  | Image width rule
------------------------|---------------------
`0-639`                 | `(100vw - 26px) / 2`
`640-767`               | `(100vw - 42px) / 3`
`768-1023`              | `(75vw - 57px) / 3`
`1024-1279`             | `(75vw - 73px) / 4`
`1280-∞`                | `212px`

 -  `100vw, 75vw` --- are the main column widths
 -  `26px, 42px, 57px, 73px` --- are the sums of the following values:
    - 15px --- Main column padding (for widths above 767px only)
    - 10px --- Product item padding multiplied by columns count (2, 3, 4)
    - 6px --- A gap between columns multiplied by number of gaps (1, 2, 3)

According to the calculated rules, let's write sizes value to the `<theme_dir>/etc/view.xml>`
file:

```xml
<vars module="Swissup_Breeze">
  <var name="sizes">
    <var name="category_page_grid">(min-width: 1280px) 212px, (min-width: 1024px) calc((75vw - 73px) / 4), (min-width: 768px) calc((75vw - 57px) / 3), (min-width: 640px) calc((100vw - 42px) / 3), calc((100vw - 26px) / 2)</var>
  </var>
</vars>
```

Repeat the same operation for the list listing mode and add new sizes:

```xml
<vars module="Swissup_Breeze">
  <var name="sizes">
    <var name="category_page_grid">...</var>
    <var name="category_page_list">...</var>
  </var>
</vars>
```

> If your store uses different page layouts per different categories, you should
> also collect and add collected sizes for these layouts too:
>
> ```xml
> <vars module="Swissup_Breeze">
>   <var name="sizes">
>     <var name="category_page_grid">...</var>
>     <var name="category_page_grid-1column">...</var>
>     <var name="category_page_grid-3columns">...</var>
>     <var name="category_page_grid-cms-full-width">use:category_page_grid-1column</var>
>     <var name="category_page_list">...</var>
>   </var>
> </vars>
> ```

When you've finished with sizes, it's time to choose most suitable image
dimensions.

## Choose image dimensions

When choosing image dimensions we want to guarantee that we provide a perfectly
sized image for the most popular screen resolutions. We will use
[Statcounter statistics](https://gs.statcounter.com/screen-resolution-stats) for
that.

Let's create a table with perfect dimensions for the most popular resolutions:

Screen resolution | Perfect image width
------------------|-------------------------------
**Desktop**       | **Use 1x and 2x images**
1920x1080         | 212px, 414px
1536x864          | 212px, 414px
1366x768          | 212px, 414px
**Tablet**        | **Use 2x images only**
1280x800          | 212px*2=414px
768x1024          | 166px*2=332px
**Mobile**        | **Use 2x and 3x images only**
414x896           | 184px\*2=368px, 184px\*3=552px
375x667           | 165px\*2=330px, 165px\*3=495px

Let's write the collected dimensions to the `<theme_dir>/etc/view.xml` file:

```xml
<media>
  <images module="Magento_Catalog">
    <image id="category_page_grid" type="small_image">
      <width>212</width>
      <height>[x]</height>
    </image>
    <image id="category_page_grid-srcset-1" type="small_image">
      <width>332</width>
      <height>[x]</height>
    </image>
    <image id="category_page_grid-srcset-2" type="small_image">
      <width>368</width>
      <height>[x]</height>
    </image>
    <image id="category_page_grid-srcset-3" type="small_image">
      <width>414</width>
      <height>[x]</height>
    </image>
    <image id="category_page_grid-srcset-4" type="small_image">
      <width>498</width>
      <height>[x]</height>
    </image>
    <image id="category_page_grid-srcset-5" type="small_image">
      <width>552</width>
      <height>[x]</height>
    </image>
  </images>
</media>
```

p.s. Keep in mind that every new size will increase hard drive space usage,
so feel free to omit some of the sizes to find out the best solution for you and
your visitors.
