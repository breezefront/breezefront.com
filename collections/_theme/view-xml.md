---
layout: default
title: View.xml
description: Breeze theme view.xml file
order: 200
---

# View.xml file

`<theme_dir>/etc/view.xml` --- is a standard Magento theme file that is used to
describe basic image dimensions and product gallery settings.

Breeze module adds few more settings you can control within view.xml file:

 -  [Responsive images sizes and srcsets](/responsive-images)
 -  [Breeze module settings](/settings)

Here is a shortened version of view.xml file contents:

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <media>
        <images module="Magento_Catalog">
            <!-- Image demensions and srcsets -->
            <image id="category_page_grid" type="small_image">
                <width>300</width>
                <height>375</height>
            </image>
            <image id="category_page_grid-srcset-600" type="small_image">
                <width>600</width>
                <height>750</height>
            </image>
        </images>
    </media>
    <vars module="Magento_Catalog">
        <var name="gallery">
            <!-- Gallery settings -->
            <var name="allowfullscreen">true</var>
            <var name="keyboard">true</var>
            <var name="loop">true</var>
            <var name="nav">true</var>
            <var name="navdir">horizontal</var>
        </var>
    </vars>
    <vars module="Swissup_Breeze">
        <!-- Breeze module settings -->
        <var name="enabled">1</var>
        <var name="turbo">1</var>
        <var name="responsive_images">1</var>
        <!-- Image sizes to use per screen size -->
        <var name="sizes">
            <var name="category_page_grid">...</var>
            <var name="category_page_grid-1column">...</var>
        </var>
    </vars>
</view>
```
