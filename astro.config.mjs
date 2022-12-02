import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
  ],
  // TODO: Set up base to /jam/ when we're ready to launch.
  // base: "/jam/",
  site: "https://matthewhendricks.net/",
});
