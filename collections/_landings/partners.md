---
layout: default
title: Partners &amp; Vendors
navigation: Partners
description: >
   Companies that work with Breeze and develop Breeze-compatible modules and themes
order: 50
class: prose prose-zink max-w-3xl mx-auto
---

# Partners & Vendors
{:.text-center.text-zinc-800.sm:text-5xl.sm:font-black.md:text-6xl}

Here you can view a list of companies that work with Breeze and provide
module integration services.

{% for partner in site.data.partners %}
  <a href="{{ partner.url }}" target="_blank" rel="noopener">{{ partner.title }}</a>
  <span class="badge">{{ partner.type }}</span>
  <div>{{ partner.description | markdownify }}</div>
{% endfor %}
