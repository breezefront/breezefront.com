---
layout: docs
title: Shipping Estimation
description: How to customize shipping estimation block
---

# Shipping Estimation

* TOC
{:toc}

## About

Shipping estimation --- is a block at shopping cart page that allows to view and
calculate shipping and tax values.

- [JS Component](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/estimate-shipping.js){:target="_blank" rel="noopener"}
- [Template](https://github.com/breezefront/module-breeze/blob/master/view/frontend/templates/checkout/cart/shipping.phtml){:target="_blank" rel="noopener"}
- [Layout Update](https://github.com/breezefront/module-breeze/blob/master/view/frontend/layout/breeze_checkout_cart_index.xml#L9-L15){:target="_blank" rel="noopener"}

## Change address fields

Sometimes you may want to hide existing or add new address fields to the
estimation form. Breeze allows you to do that using layout update xml instructions.

Place the code below into `Magento_Theme/layout/checkout_cart_index.xml` file
in your custom theme to hide the region and postcode fields, and add city above
country field:

> Please note that we will send only
> [known address fields](https://github.com/breezefront/module-breeze/blob/master/view/frontend/web/js/components/cart/new-customer-address.js#L13-L37){:target="_blank" rel="noopener"}

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceContainer name="checkout.cart.shipping.fields">
      <referenceBlock name="checkout.cart.shipping.fields.region" remove="true"/>
      <referenceBlock name="checkout.cart.shipping.fields.postcode" remove="true"/>
      <block class="Magento\Framework\View\Element\Template" name="checkout.cart.shipping.fields.city" before="checkout.cart.shipping.fields.country" template="Swissup_Breeze::checkout/cart/shipping/field.phtml">
        <arguments>
          <argument name="name" xsi:type="string">city</argument>
          <argument name="label" xsi:type="string" translate="true">City</argument>
          <!-- Remove the lines below to create regular text input -->
          <argument name="options" xsi:type="array">
            <item name="0" xsi:type="array">
              <item name="value" xsi:type="string">Rivne</item>
              <item name="label" xsi:type="string">Rivne</item>
            </item>
            <item name="1" xsi:type="array">
              <item name="value" xsi:type="string">Kyiv</item>
              <item name="label" xsi:type="string">Kyiv</item>
            </item>
          </argument>
        </arguments>
      </block>
    </referenceContainer>
  </body>
</page>
```
