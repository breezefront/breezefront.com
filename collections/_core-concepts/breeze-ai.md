---
layout: docs
title: Breeze AI
description: AI content generation, translation and MCP server for Magento admin
order: 900
---

# Breeze AI

* TOC
{:toc}

## About

Breeze AI brings language models into the Magento admin. It's a part of
[Breeze Enterprise](https://swissuplabs.com/magento-themes/magento-2-breeze-enterprise.html){:target="_blank" rel="noopener"}
theme and consists from several parts:

 -  AI Models --- connect one or more providers: OpenAI, Claude
    ([Anthropic](https://www.anthropic.com/){:target="_blank" rel="noopener"}) and
    Gemini (Google).
 -  Prompts --- reusable prompt templates, assigned to the fields they generate.
 -  AI Assistant --- generate or rewrite a single field right from the product,
    category or CMS page edit form.
 -  AI Bulk Action --- generate and translate content for many products or
    categories at once, in the background.
 -  MCP Server --- expose the store to AI coding agents over the
    [Model Context Protocol](https://spec.modelcontextprotocol.io){:target="_blank" rel="noopener"}.

## AI Models

Start with the models. It's available for all Breeze Enterprise Theme customers
under _Swissup > Breeze AI > Models_ menu. Add a model, pick the provider,
paste the API key and mark one of them as default --- everything else in Breeze AI
uses the default model unless a different one is chosen explicitly.

<!-- TODO: screenshot --- Swissup > Breeze AI > Models grid, or the model form with provider select
<img src="{{ '/assets/img/breeze-ai/models.webp?v=1' | relative_url }}" width="656" height="362" class="!m-0 rounded-lg shadow-lg" alt="AI Models Screenshot"/>
-->

## Prompts

Prompts live under _Swissup > Breeze AI > Prompts_ menu. Every prompt is bound to
the fields it may write to, so the AI Assistant and AI Bulk Action only offer the
prompts that make sense for the field at hand.

<!-- TODO: screenshot --- Swissup > Breeze AI > Prompts grid, or the prompt form with the field assignment
<img src="{{ '/assets/img/breeze-ai/prompts.webp?v=1' | relative_url }}" width="656" height="362" class="!m-0 rounded-lg shadow-lg" alt="Prompts Screenshot"/>
-->

## AI Assistant

Once a prompt is assigned to a field, an AI button appears next to that field on
the product, category and CMS page edit forms. The button opens a chat popup ---
pick a predefined prompt or type your own request, keep refining the answer in
the same conversation, then click _Apply_ to write the result into the field.

<!-- TODO: screenshot --- product edit page with the AI Assistant popup open over the Description field
<img src="{{ '/assets/img/breeze-ai/ai-assistant.webp?v=1' | relative_url }}" width="656" height="362" class="!m-0 rounded-lg shadow-lg" alt="AI Assistant Screenshot"/>
-->

## AI Bulk Action

Bulk generation is available under _Swissup > Breeze AI > AI Bulk Action_ menu.
The page is a step-by-step form, and every step only appears once the previous
one is answered:

 1. _Select content type_ --- products or categories.
 2. _Select AI task_ --- _Generate Content_ or _Translate_.
 3. _Select store view_ --- the language and scope of the operation. Translate
    asks for a source and a target store view instead of a single one.
 4. _Select fields_ --- the attributes to process, with a prompt picked per
    field.
 5. _Select items_ --- the grid, where the products or categories are picked
    by hand or narrowed down with filters.

Then hit _Run_. The jobs are dispatched to a Magento message queue, so the admin
session isn't blocked and the progress can be watched under _System > Bulk
Actions_. The consumer has to be running:

```bash
bin/magento queue:consumers:start swissup.breezeai.product.attribute.update.consumer
```

<!-- TODO: screenshot --- Swissup > Breeze AI > AI Bulk Action page with the product grid and the field/prompt form
<img src="{{ '/assets/img/breeze-ai/bulk-action.webp?v=1' | relative_url }}" width="656" height="362" class="!m-0 rounded-lg shadow-lg" alt="AI Bulk Action Screenshot"/>
-->

## Translation

Translation is a skill of its own, not a separate screen. It reads the value of
an attribute in the source store view, translates it into the locale of the
target store view and writes the result back to that store view --- available
both from the AI Assistant popup and from AI Bulk Action.

## MCP Server

Breeze AI also works the other way around: instead of calling a model from the
admin, it lets an AI coding agent --- Claude Code, Cursor, Cline, Windsurf ---
call the store. The endpoint is `POST /rest/V1/breezeai/mcp` and it exposes four
tools: `generate`, `translate`, `list_prompts` and `graphql` for read-only
catalog access.

The endpoint is enabled by default. To register an agent, generate a token:

```bash
bin/magento breezeai:mcp:setup
```

The command creates a permanent, revocable integration scoped to
`Swissup_BreezeAi::manage` and prints a ready-to-paste connection command. On
Magento 2.4.4+ integration tokens have to be allowed as bearer tokens:

```bash
bin/magento config:set oauth/consumer/enable_integration_as_bearer 1
bin/magento cache:flush
```

The endpoint can be switched off, and the GraphQL URL used by the `graphql` tool
can be overridden, under _Stores > Configuration > Swissup > Breeze AI > MCP
Server_ --- the override is needed when the server can't reach itself by its
public URL, for example with Varnish in front or inside docker.

<!-- TODO: screenshot --- Stores > Configuration > Swissup > Breeze AI section (General + MCP Server groups)
<img src="{{ '/assets/img/breeze-ai/mcp-server.webp?v=1' | relative_url }}" width="656" height="362" class="!m-0 rounded-lg shadow-lg" alt="MCP Server Screenshot"/>
-->

## Store discoverability

Two read-only endpoints help external AI agents and crawlers understand the
store without any configuration: `/llms.txt` describes the store in plain text,
and `/.well-known/ai-plugin.json` advertises the GraphQL API as a plugin
manifest.
