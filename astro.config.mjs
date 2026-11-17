import { defineConfig } from "astro/config";
import { identity } from "./site.config.mjs";
export default defineConfig({
  site: identity.origin,
  base: identity.base,
  trailingSlash: "always",
});
