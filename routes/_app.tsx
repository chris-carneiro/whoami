import { define } from "../utils.ts";


export default define.page(function App({
  Component,
  state,
}) {
  return (
    <html lang={state.lang ?? "en"}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="bg-nigredo text-citrinitas">
        <Component/>
      </body>
    </html>
  );
});
