import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import DynamicTranslate from "../islands/DynamicTranslate.tsx";
import { TranslationState } from "./_middleware.ts";
import { TranslationProvider } from "../islands/TranslationContext.tsx";

export default function Home(ctx: PageProps<unknown, TranslationState>) {
  const labels = ctx.state.tValues;
  const lang = ctx.state.lang.value;

  return (
    <div>
      <TranslationProvider
        initLabels={labels} initLang={lang}>
        <Header/>
        <div className="ml-6">
          <DynamicTranslate />
          <p>{globalThis.navigator.language}</p>
        </div>
      </TranslationProvider>
    </div>
  );
}
