<script lang="ts">
  import { I18n } from "val-i18n";
  import { I18nProvider } from "../../lib";
  import Child from "./child.svelte";

  const loader = I18n.load("en", (lang) => import(`./locales/${lang}.json`));
</script>

<I18nProvider i18n={loader} let:t>
  <p>{t("description")}</p>
  <Child />
</I18nProvider>
