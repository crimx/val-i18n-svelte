<script lang="ts">
  import { I18n, type Locales } from "val-i18n";
  import { setI18n } from "../../lib";
  import Child from "./child.svelte";

  const locales: Locales = {
    en: {
      hello: "Hello, World!",
      language: {
        en: "English",
        fr: "French",
      },
    },
    fr: {
      hello: "Bonjour, le monde!",
      language: {
        // cSpell:ignore Anglais
        en: "Anglais",
        fr: "Français",
      },
    },
  };
  const i18n = new I18n("en", locales);
  setI18n(i18n);
</script>

<Child />
