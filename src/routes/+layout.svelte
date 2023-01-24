<script lang="ts">
  import I18nProvider from "../lib/i18n-provider.svelte";
  import { I18n } from "val-i18n";
  const loader = I18n.load("en", (lang) => import(`../locales/${lang}.json`));
</script>

<I18nProvider i18n={loader} let:t>
  <h1>{t("title")}</h1>
  <p>{t("description")}</p>
  <slot />
</I18nProvider>
