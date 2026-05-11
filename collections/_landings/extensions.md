---
layout: default
title: Extensions
description: The list of Breeze-compatible third-party modules
order: 30
search: true
---

# Extensions
{:.text-4xl.tracking-tight.text-center.font-extrabold.sm:text-5xl.sm:font-black.md:text-6xl}

Extend your store functionality with our and third-party modules.
{:.text-center.text-zinc-500.text-lg.mt-2.sm:mx-10}

{% assign extensions = site.data.extensions | sort_natural: 'name' %}

<div id="modules">
  <div class="text-center py-8">
    <input class="search px-4 py-2 text-lg border border-zinc-300 rounded-full w-full max-w-md" type="text" placeholder="Search..."/>
  </div>

  <div class="max-w-6xl mx-auto flex gap-4 ring-1 ring-blue-100 bg-blue-50 p-4 rounded-md">
    <div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>
    </div>
    <div>
      <div class="font-semibold text-gray-600">Better compatibility mode</div>
      <div>
        When enabled, "Better Compatibility" allows using third-party modules without the need to create custom integration.
        <a class="inline-flex items-center text-blue-600 font-semibold hover:underline" href="docs/better-compatibility">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div class="list grid justify-center grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(220px,285px))] gap-2 sm:gap-5 my-12 mx-auto not-prose sm:mt-16">
    {%- for extension in extensions %}
      <a href="{{ extension.integration_url | default: extension.url }}" target="_blank" rel="noopener nofollow"
        class="flex relative rounded-md group">
        <div class="flex gap-3.5 w-full ring ring-gray-200 p-4.5 rounded-md">
          <div class="flex items-center shrink-0 max-[450px]:hidden w-16 h-16 rounded-md overflow-hidden whitespace-nowrap uppercase p-2 {{ extension.css | default: 'bg-gray-200/60 text-gray-50 text-4xl font-black' }}">
            {%- if extension.logo -%}
              {{ extension.logo }}
            {%- elsif extension.shortname -%}
              {{ extension.shortname }}
            {%- else -%}
              {{ extension.name
                | split: '/'
                | last
                | remove: 'module-'
                | remove: 'magento2-'
                | remove: '-integration'
              }}
            {%- endif -%}
          </div>
          <div class="flex flex-col">
            <div class="flex">
              <span class="text-xs font-semibold text-gray-500 uppercase">{{ extension.name | split: '/' | first }}</span>
              <span class="text-xs font-semibold text-gray-500 uppercase">/</span>
            </div>
            <div class="text-lg/6 font-bold break-all">
              <span class="name pr-[2ch]">
                {%- if extension.shortname -%}
                  {{ extension.shortname }}
                {%- else -%}
                  {{ extension.name | split: '/' | last | remove: 'module-' | remove: 'magento2-' | remove: '-integration' }}
                {%- endif -%}
              </span>
              <svg class="inline-block -mt-px -ml-6 transition opacity-0 shrink-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </div>
            <div class="description mt-1.5 text-sm text-gray-500 line-clamp-3">
              {{ extension.description }}
              <div class="name hidden">{{ extension.name }}</div>
            </div>
            {%- unless extension.integration_url -%}
              <div class="flex items-center !absolute right-[15px] top-[11px]" tabindex="0" aria-label="Made for Breeze. No additional integration" data-microtip-position="top-left" role="tooltip">
                <svg width="28" height="28" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <path d="M69.1024375,36 C70.6336875,36 71.9442344,35.5546875 73.0340781,34.6640625 C74.1239219,33.7734375 74.6688438,32.578125 74.6688438,31.078125 C74.6688438,30.0546875 74.3563438,29.171875 73.7313438,28.4296875 C73.1063438,27.6875 72.2430625,27.1875 71.1415,26.9296875 L71.1415,26.9296875 L71.1415,26.8828125 C72.0555625,26.609375 72.7723594,26.1679688 73.2918906,25.5585938 C73.8114219,24.9492188 74.0711875,24.2539062 74.0711875,23.4726562 C74.0711875,22.1992188 73.6219688,21.2128906 72.7235313,20.5136719 C71.8250938,19.8144531 70.579,19.4648438 68.98525,19.4648438 L68.98525,19.4648438 L64.4032188,19.4648438 L64.4032188,36 L69.1024375,36 Z M68.5750938,26.0390625 L66.3250938,26.0390625 L66.3250938,21.140625 L68.6922813,21.140625 C69.8094688,21.140625 70.657125,21.3457031 71.23525,21.7558594 C71.813375,22.1660156 72.1024375,22.7539062 72.1024375,23.5195312 C72.1024375,25.1992188 70.9266563,26.0390625 68.5750938,26.0390625 L68.5750938,26.0390625 Z M68.5047813,34.3242188 L66.3250938,34.3242188 L66.3250938,27.7148438 L68.3641563,27.7148438 C69.7547813,27.7148438 70.8172813,28.0078125 71.5516563,28.59375 C72.2860313,29.1796875 72.6532188,30.0078125 72.6532188,31.078125 C72.6532188,32.0859375 72.2801719,32.8789062 71.5340781,33.4570312 C70.7879844,34.0351562 69.7782188,34.3242188 68.5047813,34.3242188 L68.5047813,34.3242188 Z M80.7274375,36 L80.7274375,28.4882812 L82.86025,28.4882812 L87.7118125,36 L90.1141563,36 L84.829,28.078125 C85.9930625,27.796875 86.907125,27.2636719 87.5711875,26.4785156 C88.23525,25.6933594 88.5672813,24.796875 88.5672813,23.7890625 C88.5672813,22.4296875 88.1122031,21.3691406 87.2020469,20.6074219 C86.2918906,19.8457031 85.0516563,19.4648438 83.4813438,19.4648438 L83.4813438,19.4648438 L78.8055625,19.4648438 L78.8055625,36 L80.7274375,36 Z M83.1532188,26.8125 L80.7274375,26.8125 L80.7274375,21.140625 L83.2000938,21.140625 C85.4500938,21.140625 86.5750938,22.0625 86.5750938,23.90625 C86.5750938,24.7421875 86.2586875,25.4355469 85.625875,25.9863281 C84.9930625,26.5371094 84.1688438,26.8125 83.1532188,26.8125 L83.1532188,26.8125 Z M102.395406,36 L102.395406,34.3242188 L95.6805625,34.3242188 L95.6805625,27.9375 L102.067281,27.9375 L102.067281,26.2617188 L95.6805625,26.2617188 L95.6805625,21.140625 L102.325094,21.140625 L102.325094,19.4648438 L93.7586875,19.4648438 L93.7586875,36 L102.395406,36 Z M116.79775,36 L116.79775,34.3242188 L110.082906,34.3242188 L110.082906,27.9375 L116.469625,27.9375 L116.469625,26.2617188 L110.082906,26.2617188 L110.082906,21.140625 L116.727438,21.140625 L116.727438,19.4648438 L108.161031,19.4648438 L108.161031,36 L116.79775,36 Z M131.61025,36 L131.61025,34.3242188 L123.887594,34.3242188 L131.750875,20.8359375 L131.750875,19.4648438 L122.036031,19.4648438 L122.036031,21.140625 L129.524313,21.140625 L121.696188,34.6523438 L121.696188,36 L131.61025,36 Z M145.602438,36 L145.602438,34.3242188 L138.887594,34.3242188 L138.887594,27.9375 L145.274313,27.9375 L145.274313,26.2617188 L138.887594,26.2617188 L138.887594,21.140625 L145.532125,21.140625 L145.532125,19.4648438 L136.965719,19.4648438 L136.965719,36 L145.602438,36 Z" id="path-1"></path>
                      <polygon id="path-22" points="14.954 16 41.954 16 41.954 40 14.954 40"></polygon>
                  </defs>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <mask id="mask-33" fill="white">
                        <use xlink:href="#path-22"></use>
                    </mask>
                    <path d="M46.51,22.028 C40.402,22.028 40.402,18.388 34.34,18.388 C28.232,18.388 28.232,22.028 22.17,22.028 C16.107,22.028 16.062,18.388 10,18.388 M46.51,29.668 C40.402,29.668 40.402,26.028 34.34,26.028 C28.232,26.028 28.232,29.668 22.17,29.668 C16.107,29.668 16.062,26.028 10,26.028 M46.51,37.307 C40.402,37.307 40.402,33.667 34.34,33.667 C28.232,33.667 28.232,37.307 22.17,37.307 C16.107,37.307 16.062,33.667 10,33.667" stroke="#000" stroke-width="3" mask="url(#mask-33)"></path>
                  </g>
                </svg>
              </div>
            {%- endunless -%}
          </div>
        </div>
      </a>
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
