import { identity } from "../../site.config.mjs";
import { route, absolute } from "../data/projects";
export const GET = () =>
  new Response(
    "User-agent: *\nAllow: /\nSitemap: " +
      absolute(route() + "sitemap.xml") +
      "\nSitemap: " +
      identity.studio +
      "sitemap.xml\n",
  );
