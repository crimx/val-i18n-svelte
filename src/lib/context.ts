import { setContext, getContext } from "svelte";
import type { I18n, LocaleLangObservable, TFunctionObservable } from "val-i18n";
import { flatten, val, type Val } from "value-enhancer";

const I18nContextKey = "_ValI18n";
const I18nTContextKey = "_ValI18nT";
const I18nLangContextKey = "_ValI18nLang";

export type I18nObservable = Val<I18n>;

/**
 * Set the I18n context.
 *
 * Must be called during component initialization as it calls `getContext` under the hood.
 */
export const setI18n = (i18n: I18n): I18nObservable => {
  const i18n$ = setContext(I18nContextKey, val(i18n));
  setContext(
    I18nTContextKey,
    flatten(i18n$, (i18n) => i18n.t$)
  );
  setContext(
    I18nLangContextKey,
    flatten(i18n$, (i18n) => i18n.lang$)
  );
  return i18n$;
};

/**
 * Get the I18n observable from context.
 *
 * Can only be called after `setI18n`.
 *
 * Must be called during component initialization as it calls `getContext` under the hood.
 */
export const useI18n = (): I18nObservable => {
  const i18n$ = getContext<I18nObservable | undefined>(I18nContextKey);
  if (!i18n$) {
    throw new Error("I18n Context not found");
  }
  return i18n$;
};

/**
 * Get the t function observable from context.
 *
 * Can only be called after `setI18n`.
 *
 * Must be called during component initialization as it calls `getContext` under the hood.
 */
export const useTranslate = (): TFunctionObservable =>
  getContext(I18nTContextKey) || /* let it throw */ (useI18n() as never);

/**
 * Get the locale lang observable from context.
 *
 * Can only be called after `setI18n`.
 *
 * Must be called during component initialization as it calls `getContext` under the hood.
 */
export const useLang = (): LocaleLangObservable =>
  getContext(I18nLangContextKey) || /* let it throw */ (useI18n() as never);
