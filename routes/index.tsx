import { PageProps } from "fresh";

import { TranslationState } from "./_middleware.ts";

import TranslationIsland from "../islands/TranslationIsland.tsx";

export default function Home(ctx: PageProps<unknown, TranslationState>) {
  return (
    <>
      <TranslationIsland
        initialLabels={ctx.state.tValues}
        initialLang={ctx.state.lang.value}
      />
    </>
  );
}
