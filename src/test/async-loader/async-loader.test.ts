import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import Parent from "./parent.svelte";
import zhCN from "./locales/zh-CN.json";
import en from "./locales/en.json";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("async-loader", () => {
  it("should set async i18n to context", async () => {
    const { container } = render(Parent);

    await sleep(0);

    const p = container.querySelector("p") as HTMLParagraphElement;
    const h1 = container.querySelector("h1") as HTMLHeadingElement;
    const button = container.querySelector("button") as HTMLButtonElement;

    expect(p.innerHTML).toBe(en.description);
    expect(h1.innerHTML).toBe(en.hello);
    expect(button.innerHTML).toBe(en.language.en);

    await fireEvent.click(button);
    await sleep(0);

    expect(p.innerHTML).toBe(zhCN.description);
    expect(h1.innerHTML).toBe(zhCN.hello);
    expect(button.innerHTML).toBe(zhCN.language["zh-CN"]);
  });
});
