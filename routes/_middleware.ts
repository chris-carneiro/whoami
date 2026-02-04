import { getCookies } from "$std/http/cookie.ts";
import { EN, Lang } from "../utils/lang.ts";
import { define } from "../utils/global.ts";

export default define.middleware(async (ctx) => {
  const cookies = getCookies(ctx.req.headers);
  ctx.state.lang = (cookies.lang as Lang) ?? EN;
  return await ctx.next();
});
