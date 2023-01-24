# [val-i18n-svelte](https://github.com/crimx/val-i18n-svelte)

<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/crimx/val-i18n/main/assets/val-i18n.svg">
</p>

[![Build Status](https://github.com/crimx/val-i18n-svelte/actions/workflows/build.yml/badge.svg)](https://github.com/crimx/val-i18n-svelte/actions/workflows/build.yml)
[![npm-version](https://img.shields.io/npm/v/val-i18n-svelte.svg)](https://www.npmjs.com/package/val-i18n-svelte)
[![Coverage Status](https://img.shields.io/coveralls/github/crimx/val-i18n-svelte/master)](https://coveralls.io/github/crimx/val-i18n-svelte?branch=master)
[![minified-size](https://img.shields.io/bundlephobia/minzip/val-i18n-svelte)](https://bundlephobia.com/package/val-i18n-svelte)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Svelte goodies for [val-i18n](https://github.com/crimx/val-i18n).

## Install

```bash
npm add val-i18n-svelte val-i18n value-enhancer
```

## API

- `useTranslate` hook to get updated `i18n.t$`.
- `useLang` hook to get updated `i18n.lang$`.
- `useI18n` hook to get `i18n$`.
- `<I18nProvide>` to set i18n context automatically.
- `setI18n` to set i18n context manually.

You can run the example in this repo by `pnpm dev`.

## Usage

### With static locales:

Set `i18n` context in root component:

```svelte
<script>
  import { setI18n, useTranslate } from "val-i18n-svelte";
  import { I18n } from "val-i18n";

  const locales = { en: { apple: "apple" } };
  const i18n = new I18n("en", locales);
  setI18n(i18n);
</script>

<div>....</div>
```

Access i18n in descendent components (any level):

```svelte
<script>
  import { useTranslate, useLang, useI18n } from "val-i18n-svelte";

  const t = useTranslate();
  const lang = useLang();
  const i18n = useI18n();
</script>

<div>{$t("apple")}</div>
<button on:click={() => $i18n.switchLang("zh")}>{$lang}</button>
```

### With dynamic locales:

Set `i18n` context in root component:

```svelte
<script>
  import { setI18n, I18nProvider } from "val-i18n-svelte";
  import { I18n } from "val-i18n";

  const loader = I18n.load("en", (lang) => import(`../locales/${lang}.json`));
  setI18n(i18n);
</script>

<I18nProvider i18n={loader}>.....</I18nProvider>
```

Access i18n in descendent components (any level):

```svelte
<script>
  import { useTranslate, useLang, useI18n } from "val-i18n-svelte";

  const t = useTranslate();
  const lang = useLang();
  const i18n = useI18n();
</script>

<div>{$t("apple")}</div>
<button on:click={() => $i18n.switchLang("zh")}>{$lang}</button>
```

If you need to access i18n in root component:

```svelte
<I18nProvider let:t let:i18n let:lang>
  <div>{t("apple")}</div>
  <button on:click={() => i18n.switchLang("zh")}>{lang}</button>
</I18nProvider>
```

## Developing

This project is created by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
