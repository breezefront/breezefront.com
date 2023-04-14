---
layout: docs
title: Icons
description: Icons
---

# Icons

* TOC
{:toc}

## About

Breeze Frontend uses [Heroicons v1](https://v1.heroicons.com/){:target="_blank" rel="noopener"} icons. Each icon is declared as a LESS variable, so it's very easy to
replace them with any other svg icons.

Source code:

 - [Mixin](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/mixins/_icon.less){:target="_blank" rel="noopener"}
 - [Variables](https://github.com/breezefront/theme-frontend-breeze-blank/blob/master/web/css/abstracts/variables/_icons.less){:target="_blank" rel="noopener"}

## Usage

To use the icon, we provide a `breeze-icon` mixin. This mixin is coming with
built-in critical CSS support, so you don't have to wrap it into `@critical`
guard:

```scss
selector::before { .breeze-icon(@icon-heart, @6); }
selector::before { .breeze-icon(@icon-s-home, @5); }
```

## Icons

<div class="grid grid-cols-2 gap-4 items-start">
{%- for icons in site.data.icons %}
  <div>
    <div class="font-semibold mb-2">
      <span class="">{{ icons.title }}</span>
      <code class="font-normal text-zinc-500 bg-zinc-50">{{ icons.code }}</code>
    </div>
    <div class="grid grid-cols-4 gap-1.5 gap-y-2">
    {%- for data in icons.icons %}
      <div class="relative group text-center" title="@{{ data[0] }}">
        <div class="flex items-center border rounded-lg aspect-square">
          {%- if icons.size == 6 %}
            <div class="w-6 h-6 mx-auto">{{ data[1] }}</div>
          {%- else %}
            <div class="w-5 h-5 mx-auto">{{ data[1] }}</div>
          {%- endif %}
        </div>
        <div class="mt-1 text-xs text-ellipsis overflow-hidden whitespace-nowrap">
          @{{ data[0] }}
        </div>
        <button class="absolute h-4 w-4 top-1 right-1 text-zinc-300 opacity-0 group-hover:opacity-100 focus:opacity-100 group" data-copy="@{{ data[0] }}">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-4 w-4 group-[.copied]:opacity-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-4 w-4 opacity-0 group-[.copied]:opacity-100" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    {%- endfor %}
    </div>
  </div>
{%- endfor %}
</div>
