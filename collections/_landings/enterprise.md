---
layout: default
title: Breeze Enterprise
description: Stores powered by Breeze we found on the web
order: 5
body: no-anchors
---

# Breeze Enterprise
{:.text-4xl.tracking-tight.text-center.font-extrabold.sm:text-5xl.sm:font-black.md:text-6xl}

Push Breeze beyond the limits with premuim theme and additional features
{:.text-center.text-zinc-500.text-lg.mt-2.sm:mx-10}

<section class="max-w-4xl 2xl:max-w-5xl mx-auto py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
  <div class="md:col-span-2 p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-4 items-start rounded-xl border-1">
    <h2 class="text-4xl font-bold md:mx-6">Apollo Theme</h2>
    <p class="text-black/70 text-xl md:mx-6">
      Apollo is an example theme included with Breeze Enterprise. It demonstrates how
      the system can be used in practice, with prebuilt styles and components ready
      to use or adapt. For custom development, Breeze Enterprise Blank serves as the
      minimal and clean base.
    </p>
    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:mx-6">
      <a class="group inline-flex items-center justify-center px-7 py-3 rounded-lg border-1 text-lg font-bold shadow-xl transition" href="https://breezeenterprise.swissupdemo.com/" target="_blank" rel="noopener">
        View Demo
        <div class="relative w-1 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path class="transition opacity-0 group-hover:opacity-100" fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path class="transition translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </a>
      <a class="group inline-flex items-center justify-center px-7 py-3 text-white rounded-lg border-1 border-transparent bg-black text-lg font-bold shadow-xl transition" href="https://swissuplabs.com/magento-themes/magento-2-breeze-enterprise.html" target="_blank" rel="noopener">
        Purchase
        <div class="relative w-1 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path class="transition opacity-0 group-hover:opacity-100" fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path class="transition translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </a>
    </div>
  </div>

  <div class="md:col-span-2 p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-4 items-start rounded-xl border-1">
    <h2 class="text-4xl font-bold md:mx-6">Theme Editor</h2>
    <p class="mt-1 text-black/70 text-xl md:mx-6">
      The Theme Editor provides a UI layer for managing design-related settings such
      as colors, typography, spacing, and layout options. Most changes are mapped to
      CSS variables, so updates can be applied instantly without recompilation or
      code changes.
    </p>
  </div>

  <div class="md:col-span-2 p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-4 items-start rounded-xl border-1">
    <h2 class="text-4xl font-bold md:mx-6">Content Editor</h2>
    <p class="mt-1 text-black/70 text-xl md:mx-6">
      The Content Editor allows you to build pages using predefined sections and
      blocks. It covers common layout patterns and reduces the need for custom CMS
      templates. The goal is to handle typical content use cases without involving
      frontend development.
    </p>
  </div>

  <div class="md:col-span-2 p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-4 items-start rounded-xl border-1">
    <h2 class="text-4xl font-bold md:mx-6">Future Versions</h2>
    <p class="mt-1 text-black/70 text-xl md:mx-6">
      Breeze Enterprise is actively evolving. Planned improvements include additional
      components, more flexible layout controls, and deeper integration with Magento
      features. Feedback from developers, agencies, and merchants is used to
      prioritise what comes next.
    </p>
  </div>
</section>

<section class="mx-auto max-w-4xl py-8 sm:py-12">
  <h2 class="text-center text-4xl font-extrabold leading-10 tracking-tight">
    Frequently asked questions
  </h2>
  <div class="mt-10 mx-auto max-w-xl">
    <div class="flex flex-col divide-y divide-gray-900/10">
      {%- for item in site.data.faq-enterprise -%}
        <details class="py-5">
          <summary class="text-lg font-semibold" id="{{ item.q | slugify }}">{{ item.q }}</summary>
          <div class="text-zinc-600 prose pt-2">{{ item.a }}</div>
        </details>
      {%- endfor -%}
    </div>
  </div>
</section>
