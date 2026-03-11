import { define, EN, Lang } from "../../utils.ts";

const VALID_LANGS: Lang[] = ["en", "fr"];

export const handler = define.middleware(async (ctx) => {
  const lang = ctx.params.lang as Lang;
  ctx.state.lang = VALID_LANGS.includes(lang) ? lang : EN;
  return await ctx.next();
});
