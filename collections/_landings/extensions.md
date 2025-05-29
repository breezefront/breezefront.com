---
layout: default
title: Extensions
description: The list of Breeze-compatible third-party modules
order: 30
class: max-w-4xl mx-auto
---

# Extensions
{:.text-4xl.tracking-tight.text-center.font-extrabold.sm:text-5xl.sm:font-black.md:text-6xl}

Extend your store functionality with our and third-party modules.
{:.text-center.text-zinc-500.text-lg.mt-1.sm:mx-10}

{% assign grouped_extensions = site.data.extensions | group_by: 'category' | sort: 'name' %}

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 my-10 md:my-16">
  {%- for group in grouped_extensions %}
    <a href="docs/extensions/{{ group.name }}" class="group flex flex-col gap-2">
      <div class="relative rounded shadow-[rgb(0_0_0_/_30%)_0px_10px_20px_-20px] after:rounded after:border after:border-black/8 after:absolute after:inset-0 after:pointer-events-none">
        <img class="inline-block rounded" src="/assets/img/extensions/{{ group.name }}.svg" width="500" height="500" alt="{{ group.name }} extensions illustration"/>
      </div>
      <h3 id="{{ extension.name | slugify }}" class="text-lg font-medium group-hover:underline">
        {{ group.name | replace: '-and-', '-&amp;-' | replace: '-', ' ' | capitalize }}
        ({{ group.size }})
      </h3>
    </a>
  {%- endfor %}
</div>

<div class="p-8">
  <h2 class="text-3xl tracking-tight text-center font-extrabold sm:font-black">
    <a href="#cannot-find-module" id="cannot-find-module">#</a>
    Can't find a module?
  </h2>
  <p class="text-center text-xl text-zinc-500 mt-2 max-w-3xl mx-auto">
    There is a chance that your module is compatible out of the box. Follow the instructions below.
  </p>
  <div class="mt-4 prose prose-zinc prose-lg max-w-2xl mx-auto">
    <ol>
      <li>Backend modules will work fine without integration.</li>
      <li>If the module doesn't use JS or CSS it will work without additional integration.</li>
      <li>Most checkout modules will work without additional integration.</li>
      <li>Ask your extension vendor for a compatibility update.</li>
      <li>Open compatibility request at our <a href="https://github.com/breezefront/community/discussions">GitHub</a>.</li>
    </ol>
  </div>
</div>
