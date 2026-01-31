import { getCookies } from "$std/http/cookie.ts";
import { FR, Lang } from "../utils/lang.ts";
import { define } from "../utils/global.ts";
import { signal } from "@preact/signals";

export default define.middleware(async (ctx) => {
  const req = ctx.req;
  const cookies = getCookies(req.headers);
  const langCookie = (cookies.lang as Lang) ?? FR;

  ctx.state.lang = signal(langCookie);

  return await ctx.next();
});
