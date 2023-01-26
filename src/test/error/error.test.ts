import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import UseI18n from "./use-i18n.svelte";
import UseTranslate from "./use-translate.svelte";
import UseLang from "./use-lang.svelte";

describe("context", () => {
  it("should throw error if i18n context missing", async () => {
    expect(() => render(UseI18n)).toThrow("I18n Context not found");
    expect(() => render(UseTranslate)).toThrow("I18n Context not found");
    expect(() => render(UseLang)).toThrow("I18n Context not found");
  });
});
