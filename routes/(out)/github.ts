import { define } from "../../utils/global.ts";



export const handler = define.handlers({
  GET(ctx) {
    return new Response(ctx.state.shared, {
      status: 302,
      headers: {
        Location: "https://github.com/chris-carneiro",
      },
    });
  },
});


