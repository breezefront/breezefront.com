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

<div id="modules">
  <div class="text-center py-8">
    <input class="search px-4 py-2 text-lg border border-zinc-300 rounded-full w-full max-w-md" type="text" placeholder="Search..."/>
  </div>

  <div class="list space-y-6 sm:space-y-10 my-12 empty:hidden">
    {%- for extension in site.data.extensions %}
      <div>
        <div class="flex flex-col sm:grid sm:grid-cols-12 sm:gap-x-8">
          <div class="sm:col-span-7">
            <a class="group inline-flex items-center text-lg font-medium underline" href="{{ extension.url }}" target="_blank" rel="noopener nofollow">
              <span class="name">{{ extension.name }}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline w-5 h-5 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
              </svg>
            </a>
            <div class="description mt-1 text-base text-zinc-500 prose prose-zinc">
              {{ extension.description -}}
            </div>
            <div class="tags" style="display: none">{{ extension.tags }}</div>
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
</div>

<div class="p-8">
  <h2 class="text-3xl tracking-tight text-center font-extrabold sm:font-black" id="cant-find-module">Can't find a module?</h2>
  <p class="text-center text-xl text-zinc-500 mt-2 max-w-3xl mx-auto">
    There is a chance that your module is compatible out of the box. Follow the instructions below.
  </p>
  <div class="mt-4 prose prose-zinc prose-lg max-w-2xl mx-auto">
    <ol>
      <li>Backend modules will work fine.</li>
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

  document.addEventListener('turbolinks:before-cache', () => {
    modules.search();
    modules.listContainer.getElementsByClassName(modules.searchClass)[0].value = '';
  });
</script>
