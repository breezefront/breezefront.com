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

<div class="space-y-6 sm:space-y-10 my-12 sm:mt-16">
  {%- for extension in site.data.extensions %}
    <div>
      <div class="flex flex-col sm:grid sm:grid-cols-12 sm:gap-x-8">
        <div class="sm:col-span-7">
          <a class="group inline-flex items-center text-lg font-medium underline" href="{{ extension.url }}" target="_blank" rel="noopener nofollow">
            {{ extension.name }}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline w-5 h-5 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
              </svg>
          </a>
          <div class="mt-1 text-base text-zinc-500 prose prose-zinc">
            {{ extension.description -}}
          </div>
        </div>
        <div class="mt-2 sm:mt-0.5 sm:col-span-5">
          <span class="inline-block px-3 py-0.5 bg-zinc-100 rounded-full text-sm text-zinc-500">Requirements</span>
          <ul class="ml-2 mt-1 pl-3 text-sm text-zinc-500 list-disc marker:text-zinc-400">
            {%- for require in extension.require %}
              <li class="before:inline before:-ml-0.5">{{ require }}</li>
            {%- endfor %}
          </ul>
          {%- if extension.note != nil %}
            <div class="mt-2 text-sm text-zinc-500">Note: {{ extension.note }}</div>
          {%- endif %}
        </div>
      </div>
    </div>
  {%- endfor %}
</div>
