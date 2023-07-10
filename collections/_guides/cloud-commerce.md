---
layout: docs
title: Cloud Commerce
description: Using Breeze Frontend with Magento Commerce Cloud
order: 800
---

# Cloud Commerce

* TOC
{:toc}

## About

If your store is powered by Magento Commerce Cloud and you are using zero-downtime
deployments you need to follow the steps below to fix Breeze Frontend deployment
with enabled js merging/bundling. 

> If you don't use merge/bundles/zero-downtime deployments, you don't need to 
> follow instructions below.

## Instructions

1. SSH into Magento Cloud and run the following commands:

   ```powershell
   bin/magento app:config:dump scopes
   bin/magento breeze:config:dump
   ```

   `breeze:config:dump` --- is a short version of `bin/magento app:config:dump system`
   command. Unlike Magento command it collects configs that affect Breeze bundles
   only. Additionally, it doesn't overwrite existing values in `config.php`

2. Copy generated `app/etc/config.php` to your local source code.
3. Add, commit, and push code changes.
4. Wait until Magento will redeploy static content.

That's all. Breeze Frontend is now fully compatible with zero-downtime deployments
and JS bundling.
