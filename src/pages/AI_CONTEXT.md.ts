import { identity } from "../../site.config.mjs";
import { inventory, route, absolute } from "../data/projects";
export const GET = () =>
  new Response(
    [
      "# Kaiyo",
      "",
      "Verified " + identity.verified + ".",
      "Kaiyo works across art, software and human–AI collaboration and leads the independent creative studio Chips Studio.",
      "Portfolio: " + absolute(route()),
      "Studio: " + identity.studio,
      "GitHub: " + identity.github,
      "",
      ...inventory.map(
        (p) =>
          "- " +
          p.name +
          " — " +
          p.status.en +
          ". " +
          p.license +
          ". " +
          p.canonical +
          " · Evidence: " +
          p.source,
      ),
    ].join("\n"),
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
