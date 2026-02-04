import { PageProps } from "fresh";
import { Head } from "fresh/runtime";
import { TranslationState } from "../utils/global.ts";


export default function App(
  { Component, state }: PageProps<unknown, TranslationState>,
) {
  return (
    <html lang={state.lang}>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>&gt;_</title>
      </Head>
      <body class="bg-nigredo text-citrinitas">
        <Component />
      </body>
    </html>
  );
}
