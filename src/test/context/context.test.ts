import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import Parent from "./parent.svelte";

describe("context", () => {
  it("should set context in parent and get context in descendent", async () => {
    const { container } = render(Parent);

    const h1 = container.querySelector("h1") as HTMLHeadingElement;
    const button = container.querySelector("button") as HTMLButtonElement;

    expect(h1.innerHTML).toBe("Hello, World!");
    expect(button.innerHTML).toBe("English");

    await fireEvent.click(button);

    expect(h1.innerHTML).toBe("Bonjour, le monde!");
    expect(button.innerHTML).toBe("Français");
  });
});
