---
layout: docs
title: Performance
description: How to get maximum performance with Breeze Theme
order: 400
---

# Performance

* TOC
{:toc}

When your store is ready to sell, do not forget properly configure Magento
and enable production mode.

## Delay third-party scripts

If you have some inline scripts in `Miscellaneous HTML` field, we recommend using
"lazy" script feature. It will delay script execution until user interaction:

```html
<!-- 🐌 Without "lazy" feature -->
<script>
    (function(){...})();
</script>

<!-- 🦸 With "lazy" feature -->
<script type="lazy">
    (function(){...})();
</script>
```

## Use next-gen images

There are few ways to get next-gen images in Breeze theme:

 -  Third-party module for Magento. You can try our
    [Pagespeed](https://swissuplabs.com/page-speed-magento-2.html){:target="_blank" rel="noopener"} module.
 -  Third-party service. [Cloudflare](https://developers.cloudflare.com/images/){:target="_blank" rel="noopener"}
    for example.
 -  Nginx-based image resize and optimization. [View our guide](/docs/next-gen-images/){:target="_blank" rel="noopener"}.

## Use optimal settings

Here is a one-line command that will set configuration to the recommended
values:

```powershell
bin/magento config:set dev/template/minify_html 1 &&\
bin/magento config:set dev/js/merge_files 1 &&\
bin/magento config:set dev/js/enable_js_bundling 0 &&\
bin/magento config:set dev/js/minify_files 1 &&\
bin/magento config:set dev/js/move_script_to_bottom 1 &&\
bin/magento config:set dev/css/merge_css_files 1 &&\
bin/magento config:set dev/css/minify_files 1 &&\
bin/magento config:set dev/css/use_css_critical_path 1
```

## Switch to production mode

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

<!--
## Troubleshooting

Third-party pagespeed modules may broke Breeze scripts. Make sure that the the 
following settings are disabled in third-party modules:

 -  Defer js, rocket scripts --- Breeze frontend uses native js defer out of the box.
 -  Move js to bottom --- Breeze frontend uses default Magento option for this.
-->

## Reset to developer mode

When you need to make a changes, use this command to revert recommended values 
to their defaults:

```powershell
bin/magento config:set dev/template/minify_html 0 &&\
bin/magento config:set dev/js/merge_files 0 &&\
bin/magento config:set dev/js/enable_js_bundling 0 &&\
bin/magento config:set dev/js/minify_files 0 &&\
bin/magento config:set dev/js/move_script_to_bottom 0 &&\
bin/magento config:set dev/css/merge_css_files 0 &&\
bin/magento config:set dev/css/minify_files 0 &&\
bin/magento config:set dev/css/use_css_critical_path 0 &&\
bin/magento deploy:mode:set developer &&\
bin/magento cache:clean &&\
rm -rf generated/code &&\
rm -rf generated/metadata &&\
rm -rf var/view_preprocessed/pub/static/frontend/ &&\
rm -rf pub/static/frontend
```

[twitter]: https://twitter.com/intent/tweet?&text={{"Hey @breezefront, my pagespeed score is now 95! Take a look:" | url_encode }}
