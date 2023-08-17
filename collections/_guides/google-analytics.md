---
layout: docs
title: Google Analytics
description: Fixing Google Analytics and Google Tag Manager when turbo mode is used
order: 810
---

# Google Analytics

* TOC
{:toc}

When [Turbo mode is enabled](settings), Breeze is working as SPA and traditional
page load events between page visits are not fired at all. This results in not
working GoogleAnalytics or GoogleTag data streams. To fix the issue, follow the
guides below.

## Google Analytics

Open GoogleAnalytics admin panel and open your Data Stream:

![GoogleAnalytics admin panel screeshot](/assets/img/google-analytics/admin-panel.webp){:width="1023" height="373"}

Next, enable "Enhanced measurement" event, and click the configure icon:

![Data stream events screeshot](/assets/img/google-analytics/data-stream-events.webp){:width="846" height="432"}

Open Advanced settings, enable "history events", and save the changes:

![Enhanced measurement settings screenshot](/assets/img/google-analytics/enhanced-measurement.webp){:width="617" height="270"}

That's all. Google will now send pageview events regardless of turbo mode status.

## Google Tag Manager

If you are using Google Tag Manager, you also need need to add "History Change" trigger
to the GA4 Configuration tag:

![GA4 tag settings in the Google Tag Manager](/assets/img/google-analytics/tag-manager.webp){:width="792" height="633"}
