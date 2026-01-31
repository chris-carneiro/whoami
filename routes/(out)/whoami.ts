import { define } from "../../utils/global.ts";


export const handler = define.handlers({
  GET() {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "https://github.com/chris-carneiro/whoami",
      },
    });
  },
});
