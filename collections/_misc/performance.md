---
layout: default
title: Performance
description: How to get maximum performance with Breeze Theme
order: 400
---

# Performance

The table below shows the options that will improve store performance and their
recommended values:

Option                      | Default Value | Recommended Value
----------------------------|---------------|-------------------
Minify Html                 | No            | Yes
Merge JavaScript Files      | No            | Yes
Enable JavaScript Bundling  | No            | No
Minify JavaScript Files     | No            | Yes
Merge CSS Files             | No            | Yes
Minify CSS Files            | No            | Yes
Use CSS critical path       | No            | Yes

Here is a one-line command that will set all of these settings to the recommended
values:

```powershell
bin/magento config:set dev/template/minify_html 1 &&\
bin/magento config:set dev/js/merge_files 1 &&\
bin/magento config:set dev/js/enable_js_bundling 0 &&\
bin/magento config:set dev/js/minify_files 1 &&\
bin/magento config:set dev/css/merge_css_files 1 &&\
bin/magento config:set dev/css/minify_files 1 &&\
bin/magento config:set dev/css/use_css_critical_path 1
```

The next command will switch your store to the production mode:

```powershell
bin/magento maintenance:enable &&\
bin/magento cache:clean &&\
rm -rf generated/code &&\
rm -rf generated/metadata &&\
rm -rf var/view_preprocessed/pub/static/frontend/ &&\
rm -rf pub/static/frontend/ &&\
bin/magento deploy:mode:set production --skip-compilation &&\
bin/magento setup:di:compile &&\
bin/magento setup:static-content:deploy &&\
bin/magento maintenance:disable
```

That's all. It's also recommended to run a crawler (Cache Warmer) afterward
to warm up Magento's cache.

You can then check your score at
[Google PageSpeed Insights](https://pagespeed.web.dev/){:target="_blank" rel="noopener"}
and [share your result with us on Twitter][twitter]{:target="_blank" rel="noopener"} 😉.

[twitter]: https://twitter.com/intent/tweet?&text={{"Hey @breezefront, my pagespeed score is now 95! Take a look:" | url_encode }}
