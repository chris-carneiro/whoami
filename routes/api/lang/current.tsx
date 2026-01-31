import { getCookies } from "$std/http/cookie.ts";
import { define } from "../../../utils/global.ts";
import { EN, Lang } from "../../../utils/lang.ts";


export const handler = define.handlers({
  GET(ctx) {
    const cookies = getCookies(ctx.req.headers);
    const lang = (cookies.lang as Lang) ?? EN;

    return new Response(JSON.stringify({ lang }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});
