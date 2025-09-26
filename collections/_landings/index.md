---
navigation: false
layout: default
title: Welcome
description: High performance frontend for Magento 2
---

<section class="hero-home py-8 md:py-16 flex flex-col justify-center">
  <h1 class="text-[7.5vw] leading-[7.5vw] tracking-tight text-center font-extrabold sm:text-5xl sm:leading-none sm:font-black md:text-6xl bg-zinc-800 bg-clip-text text-transparent">
    A gentle shift from <br/>
    default Magento frontend<br/>
    towards <span class="whitespace-nowrap text-green-500">all-green</span> performance
  </h1>
  <div class="flex flex-col xs:flex-row items-center justify-center mt-6 sm:mt-10 gap-4">
    <a class="group inline-flex items-center px-7 py-3 border-2 border-zinc-800 bg-white rounded-lg text-lg font-bold shadow-xl transition hover:shadow-xl hover:bg-zinc-100" href="{{ 'themes' | relative_url }}">
      View Demos
    </a>
    <a class="hero-button group inline-flex items-center px-7 py-3 border-2 border-zinc-800 bg-zinc-800 rounded-lg text-white text-lg font-bold shadow-xl transition hover:shadow-xl hover:shadow-green-300/50 hover:bg-green-500 hover:border-green-500" href="{{ 'docs/installation' | relative_url }}">
      Get started
      <div class="relative w-3 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path class="transition opacity-0 group-hover:opacity-100" fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
          <path class="transition translate-x-0 group-hover:translate-x-1" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </a>
  </div>
</section>

<section class="max-w-4xl 2xl:max-w-5xl mx-auto py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
  <div class="p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-2 items-center text-center text-white rounded-xl shadow-xl bg-linear-to-bl from-green-500/80 via-green-500 to-green-600/90">
    <div class="p-1.5 px-3 rounded-sm bg-white/20 font-bold uppercase text-sm tracking-wide">Blazing Fast</div>
    <h2 class="text-4xl font-bold max-w-xs">Boost your store performance</h2>
    <p class="mt-1 text-white/70 text-xl">
      We've reduced JS stack complexity and decreased scripts evaluation time
      from 2 seconds to 100 milliseconds!
    </p>
  </div>
  <div class="p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-2 items-center text-center text-white rounded-xl shadow-xl bg-linear-to-br from-fuchsia-500 to-violet-500">
    <div class="p-1.5 px-3 rounded-sm bg-white/20 font-bold uppercase text-sm tracking-wide">Modern Features</div>
    <h2 class="text-4xl font-bold max-w-xs">Make your store shine bright</h2>
    <p class="mt-1 text-white/70 text-xl">
      Razor sharp responsive images, optimized CSS delivery, image preload, and more.
    </p>
  </div>
  <div class="md:col-span-2 p-8 py-10 sm:p-12 sm:py-12 flex flex-col gap-2 items-center text-center rounded-xl shadow-xl bg-zinc-800 text-white bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent)]">
    <div class="p-1.5 px-3 rounded-sm bg-white/20 font-bold uppercase text-sm tracking-wide">Developer experience</div>
    <h2 class="text-4xl font-bold max-w-md">Extend your store with third-party extensions</h2>
    <p class="mt-1 text-white/70 text-xl md:mx-12">
      We've put a lot of effort to implement the same API for our own JS stack.
      Breeze uses the same layout XML files, the same phtml templates, and even
      the same html templates! This makes it super easy to write new,
      or integrate existing modules for experienced Magento developers.
    </p>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a class="group inline-flex items-center justify-center px-7 py-3 text-white rounded-lg border-2 border-white text-lg font-bold shadow-xl transition hover:bg-white/10" href="{{ 'extensions' | relative_url }}">
        Explore extensions
        <div class="relative w-1 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path class="transition opacity-0 group-hover:opacity-100" fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path class="transition translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </a>
      <a class="group inline-flex items-center justify-center px-7 py-3 text-zinc-800 rounded-lg border-2 border-transparent bg-white text-lg font-bold shadow-xl transition hover:bg-white/90" href="{{ 'docs/installation' | relative_url }}">
        Read the docs
        <div class="relative w-1 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path class="transition opacity-0 group-hover:opacity-100" fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path class="transition translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</section>

{% assign trusted-by = site.data.trusted-by %}

<section class="py-20">
  <h2 class="mb-10 text-2xl font-bold max-w-xs mx-auto text-center">Trusted by</h2>
  <div class="mx-auto max-w-5xl">
    <div class="grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
      {%- for item in trusted-by %}
        <div class="flex items-center justify-center bg-gray-400/5 p-8 sm:p-10">
          <img width="{{ item.width }}" height="{{ item.height }}" src="{{ item.src | relative_url }}" alt="{{ item.alt }}" loading="lazy" class="max-h-12 w-full object-contain {{ item.css }}" />
        </div>
      {%- endfor %}
    </div>
  </div>
</section>

<section class="mx-auto max-w-4xl py-8 sm:py-12">
  <h2 class="text-center text-4xl font-extrabold leading-10 tracking-tight">
    Frequently asked questions
  </h2>
  <p class="mt-5 mx-auto max-w-3xl text-lg text-center text-zinc-500">
    Have a different question and can’t find the answer you’re looking for?
    Reach out to us by <a class="font-semibold text-blue-600 hover:text-blue-500" href="https://github.com/breezefront/community/discussions" target="_blank" rel="noopener">creating a discussion at GitHub</a>
    and we’ll respond to you as soon as we can.
  </p>
  <div class="mt-10 mx-auto max-w-xl">
    <div class="flex flex-col divide-y divide-gray-900/10">
      {%- for item in site.data.faq -%}
        <details class="py-5">
          <summary class="text-lg font-semibold" id="{{ item.q | slugify }}">{{ item.q }}</summary>
          <div class="text-zinc-600 prose pt-2">{{ item.a }}</div>
        </details>
      {%- endfor -%}
    </div>
  </div>
</section>
