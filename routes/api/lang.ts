import { setCookie } from "$std/http/cookie.ts";
import { EN } from "../../utils/lang.ts";

export const handler = (req: Request): Response => {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") ?? EN;

  const resp = new Response(null, {
    status: 204
  });

  setCookie(resp.headers, {
    name: "lang",
    value: lang,
    path: "/",
    httpOnly: false,
    sameSite: "Lax",
    maxAge: 60 * 60 * 24 * 30, 
  });

  return resp;
};
