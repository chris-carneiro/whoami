import { EN, Lang } from "../../../../utils/lang.ts";

import { define } from "../../../../utils/global.ts";
import { LABELS } from "../../../../i18n/labels.ts";
import { getCookies } from "$std/http/cookie.ts";

export const handler = define.handlers({
  GET(ctx) {
    const cookies = getCookies(ctx.req.headers);
    const lang = cookies.lang as Lang ?? EN;

    const url = new URL(ctx.req.url);
    const labelKey = url.searchParams.get("labelkey") ?? "";

    const label = LABELS.get(lang)?.[labelKey] ?? labelKey;

    return new Response(JSON.stringify(label), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});
