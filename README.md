# Breeze Docs

This repository contains Breeze documentation site.

## Requirements

NodeJS and RubyDev should be installed priod to installation:

```bash
# NodeJS: use nvm: https://github.com/nvm-sh/nvm#installing-and-updating

# RubyDev
sudo apt install make build-essential ruby-full

# Bundler
gem install bundler
```

## Installation

```bash
git clone git@github.com:breezefront/breezefront.com.git && cd breezefront.com
bundle install && npm ci
```

## Running

```bash
bundle exec jekyll serve --livereload
npm run watch
```
