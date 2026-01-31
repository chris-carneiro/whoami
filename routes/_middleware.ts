import { getCookies } from "$std/http/cookie.ts";
import { FR, Lang } from "../utils/lang.ts";
import { define } from "../utils/global.ts";
import { signal } from "@preact/signals";
import { currentLang } from "../i18n/labels.ts";

// TODO rework label import.

export default define.middleware(async (ctx) => {
  const req = ctx.req;
  const cookies = getCookies(req.headers);
  const langCookie = (cookies.lang as Lang) ?? FR;

  currentLang.value = langCookie;
  ctx.state.lang = signal(langCookie);

  return await ctx.next();
});
