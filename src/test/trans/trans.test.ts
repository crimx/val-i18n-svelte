import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import type { SvelteComponent } from "svelte";
import SingleSlot from "./single-slot.svelte";
import MultipleSlots from "./multiple-slots.svelte";
import { Trans } from "../../lib";

const pureInnerHTML = <T extends SvelteComponent>(component: T): string =>
  component.$$.root.innerHTML.replace(/<!--(.*?)-->/g, "");

describe("trans", () => {
  it("should inset single slot into message", () => {
    const { component } = render(SingleSlot);
    expect(pureInnerHTML(component)).toBe("a<span>B</span>c");
  });

  it("should inset multiple slots into message", () => {
    const { component } = render(MultipleSlots);
    expect(pureInnerHTML(component)).toBe("<span>A</span>b<i>C</i>");
  });

  it("should render no slot", () => {
    const { component } = render(Trans);
    expect(pureInnerHTML(component)).toBe("");
  });

  it("should render message itself", () => {
    const { component } = render(Trans, { props: { message: "Hello World" } });
    expect(pureInnerHTML(component)).toBe("Hello World");
  });
});
