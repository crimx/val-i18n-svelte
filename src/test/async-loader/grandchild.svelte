<script lang="ts">
  import { useTranslate, useI18n, useLang } from "../../lib";

  const t = useTranslate();
  const lang = useLang();
  const i18n = useI18n();
</script>

<button on:click={() => $i18n.switchLang($lang === "en" ? "zh-CN" : "en")}
  >{$t(`language.${$lang}`)}</button
>
