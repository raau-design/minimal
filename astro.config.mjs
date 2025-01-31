import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [svelte(), tailwind({ applyBaseStyles: false })],
  devToolbar: {
    enabled: false,
  },
  adapter: node({
    mode: "standalone",
  }),
  output: "server",
});
