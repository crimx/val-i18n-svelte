<script lang="ts">
  import { useI18n, useLang, useTranslate } from "../lib/context";
  const i18n = useI18n();
  const t = useTranslate();
  const lang = useLang();
  let count = 0;
</script>

<button on:click={() => (count += 1)}>
  {$t("count", { ":option": count })}
</button>
<button on:click={() => $i18n.switchLang($lang === "en" ? "zh-CN" : "en")}>
  {$t(`language.${$lang}`)}
</button>
