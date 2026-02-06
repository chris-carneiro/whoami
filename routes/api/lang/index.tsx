import { setCookie } from "$std/http/cookie.ts";
import { EN } from "../../../utils/lang.ts";
import { define } from "../../../utils/global.ts";

export const handler = define.handlers({
  async POST(ctx) {
    try {
      const data = await ctx.req.json();
      const lang = data.lang ?? EN;

      const resp = new Response(null, { status: 204 });
      setCookie(resp.headers, {
        name: "lang",
        value: lang,
        path: "/",
        httpOnly: false,
        // sameSite: "Lax", // remove this if it turns out the request isn't considered same-origin see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#including_credentials
        maxAge: 60 * 60 * 24 * 30,
      });

      return resp;
    } catch (e) {
      console.error("Failed to parse JSON body:", e);
      return new Response("Bad Request", { status: 400 });
    }
  },
});
