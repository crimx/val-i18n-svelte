<script lang="ts">
  import { setI18n, useLang, useTranslate } from "./context";
  import { val } from "value-enhancer";
  import type { I18n } from "val-i18n";

  export let i18n: I18n | Promise<I18n>;

  // `i18n$.value` will be the correct `I18n` for slot children
  const i18n$ = setI18n({ t$: val(""), lang$: val("") } as unknown as I18n);

  const t$ = useTranslate();
  const lang$ = useLang();

  let loaded = false;

  $: {
    if ((i18n as Promise<I18n>).then) {
      const oldI18n = i18n;
      (i18n as Promise<I18n>).then((i18nInstance) => {
        if (oldI18n === i18n) {
          i18n$.set(i18nInstance);
          loaded = true;
        }
      });
    } else {
      i18n$.set(i18n as I18n);
      loaded = true;
    }
  }
</script>

{#if loaded}
  <slot i18n={$i18n$} t={$t$} lang={$lang$} />
{/if}
