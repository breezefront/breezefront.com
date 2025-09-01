---
layout: default
title: Extensions
description: The list of Breeze-compatible third-party modules
order: 30
class: max-w-4xl mx-auto
search: true
---

# Extensions
{:.text-4xl.tracking-tight.text-center.font-extrabold.sm:text-5xl.sm:font-black.md:text-6xl}

Extend your store functionality with our and third-party modules.
{:.text-center.text-zinc-500.text-lg.mt-1.sm:mx-10}

{% assign extensions = site.data.extensions | sort_natural: 'name' %}

<div id="modules">
  <div class="text-center py-8">
    <input class="search px-4 py-2 text-lg border border-zinc-300 rounded-full w-full max-w-md" type="text" placeholder="Search..."/>
  </div>

  <div class="list space-y-6 sm:space-y-10 mx-auto my-12 empty:hidden prose max-w-4xl">
  {%- for extension in extensions %}
    <section class="p-3 py-1 pb-1.5 my-6 relative group rounded-2xl outline-blue-600 has-[:target]:bg-blue-50 has-[:target]:outline has-[:target]:outline-2 has-[:target]:outline-offset-2">
      <h3 id="{{ extension.name | slugify }}" class="font-medium mt-0 mb-1 flex items-baseline gap-1 scroll-mt-4">
        <span class="name">{{ extension.name }}</span>
        {%- unless extension.integration_url -%}
          <span aria-label="Made for Breeze. No additional integration" data-microtip-position="top-left" role="tooltip" class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 inline text-blue-500 relative top-px shrink-0"><path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd"/></svg></span>
        {%- endunless %}
      </h3>

      <ul class="p-0 list-none mb-2 leading-tight text-gray-500">
        <li class="p-0">
          Site: <a href="{{ extension.url }}" class="font-normal text-gray-600 hover-hover:hover:underline" target="_blank" rel="noopener nofollow">
            {{ extension.url }}
          </a>
        </li>
        {%- if extension.integration_url -%}
          <li class="p-0">
            Integration:
            <a href="{{ extension.integration_url }}" class="font-normal text-gray-600 hover-hover:hover:underline" target="_blank" rel="noopener nofollow">
              {{ extension.integration_url }}
            </a>
          </li>
        {%- endif -%}
      </ul>

      <div class="description">
        {{ extension.description }}
      </div>
    </section>
  {%- endfor %}
  </div>
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

<script type="module">
  const modules = new List('modules', {
    valueNames: ['name', 'description', 'tags']
  });
</script>
