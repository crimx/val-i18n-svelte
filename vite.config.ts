import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    coverage: {
      include: ["src/lib/**"],
      reporter: ["text", "json", "html", "lcov"],
    },
  },
};

export default config;
