<script lang="ts">
  import { I18n, type Locales } from "val-i18n";
  import { setI18n, useTranslate } from "../../lib";
  import Grandchild from "./grandchild.svelte";

  const locales: Locales = {
    en: {
      title: "Sub Title",
      description: "Sub Description",
    },
  };
  const i18n = new I18n("en", locales);
  setI18n(i18n);

  const t = useTranslate();
</script>

<div class="sub-context">
  <h1 class="child">{$t("title")}</h1>

  <Grandchild />
</div>
