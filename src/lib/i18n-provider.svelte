<script lang="ts">
  import { setI18n } from "./context";
  import type { I18n, LocaleLangObservable, TFunctionObservable } from "val-i18n";
  import { derive, unwrap } from "value-enhancer";
  export let i18n: I18n | Promise<I18n>;
  // `i18n$.value` will be the correct `I18n` for slot children
  const i18n$ = setI18n(null as unknown as I18n);
  // `t$.value` will be the correct `TFunction` for slot children
  const t$ = unwrap(
    derive(i18n$, (i18n) => (i18n ? i18n.t$ : (i18n$ as unknown as TFunctionObservable)))
  );
  // `lang$.value` will be the correct `LocaleLang` for slot children
  const lang$ = unwrap(
    derive(i18n$, (i18n) => (i18n ? i18n.lang$ : (i18n$ as unknown as LocaleLangObservable)))
  );

  $: {
    if ((i18n as Promise<I18n>).then) {
      const oldI18n = i18n;
      (i18n as Promise<I18n>).then((i18nInstance) => {
        if (oldI18n === i18n) {
          i18n$.set(i18nInstance);
        }
      });
    } else {
      i18n$.set(i18n as I18n);
    }
  }
</script>

{#if $i18n$}
  <slot i18n={$i18n$} t={$t$} lang={$lang$} />
{/if}
