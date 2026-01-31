import { PageProps } from "fresh";
import { Head } from "fresh/runtime";
import { TranslationState } from "../utils/global.ts";
import { currentLang } from "../i18n/labels.ts";



export default function App(
  { Component }: PageProps<unknown, TranslationState>,
) {
  return (
    <html lang={currentLang.value}>
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
