import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import Parent from "./parent.svelte";

describe("sub-context", () => {
  it("should set context in parent and get context in descendent", async () => {
    const { container } = render(Parent);

    const context = container.querySelector(".context") as HTMLDivElement;
    const subContext = container.querySelector(".sub-context") as HTMLDivElement;

    expect(context.querySelector(".child")?.innerHTML).toBe("Main Title");
    expect(context.querySelector(".grandchild")?.innerHTML).toBe("Main Description");

    expect(subContext.querySelector(".child")?.innerHTML).toBe("Sub Title");
    expect(subContext.querySelector(".grandchild")?.innerHTML).toBe("Sub Description");
  });
});
