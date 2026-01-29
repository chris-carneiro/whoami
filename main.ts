
import { App, staticFiles } from "fresh";
import { define, EN, Lang, State } from "./utils.ts";
import { getCookies } from "$std/http/cookie.ts";


export const app = new App<State>();

  app.use(staticFiles())

  const cookies = define.middleware(async (ctx) => {
    const cookies = getCookies(ctx.req.headers);
    ctx.state.lang = (cookies.lang as Lang) ?? EN;
    return await ctx.next();
  });

  app.use(cookies)
  app.fsRoutes();