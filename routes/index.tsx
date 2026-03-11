import { define, EN, Lang } from "../utils.ts";

const SUPPORTED: Lang[] = ["en", "fr"];

function detectLang(req: Request): Lang {
  const header = req.headers.get("Accept-Language") ?? "";
  for (const part of header.split(",")) {
    const lang = part.trim().split(";")[0].trim().slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(lang as Lang)) return lang as Lang;
  }
  return EN;
}

export const handler = define.handlers({
  GET(ctx) {
    const lang = detectLang(ctx.req);
    return new Response(null, {
      status: 302,
      headers: { Location: `/${lang}` },
    });
  },
});
