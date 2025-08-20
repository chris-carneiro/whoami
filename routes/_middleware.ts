import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { Labels } from "../i18n/labels.ts";
import { FR, Lang} from "../utils/lang.ts";
import { signal, Signal } from "@preact/signals";

import en from "../i18n/json/en.json" with { type: "json" };
import fr from "../i18n/json/fr.json" with { type: "json" };

export interface TranslationState {
  lang: Signal<Lang>;
  tValues: Labels;
}

export async function handler(req: Request, ctx: FreshContext<TranslationState>) {
  const cookies = getCookies(req.headers);
  const currentLang = (cookies.lang as Lang) ?? FR;
  
  ctx.state.lang = signal(currentLang);
  ctx.state.tValues = currentLang === FR ? fr : en;

  return await ctx.next();
}
