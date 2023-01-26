<script lang="ts">
  import { I18n, type Locales } from "val-i18n";
  import { setI18n } from "../../lib";
  import Child from "./child.svelte";
  import SubContextChild from "./sub-context-child.svelte";

  const locales: Locales = {
    en: {
      title: "Main Title",
      description: "Main Description",
    },
  };
  const i18n = new I18n("en", locales);
  setI18n(i18n);
</script>

<Child />
<SubContextChild />
