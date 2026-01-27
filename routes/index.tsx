import { PageProps } from "fresh";
import Header from "../components/Header.tsx";
import { TranslationState } from "./_middleware.ts";
import { TranslationProvider } from "../islands/TranslationContext.tsx";
import Hero from "../components/Hero.tsx";
import { Experiences } from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";


export default function Home(ctx: PageProps<unknown, TranslationState>) {
  const labels = ctx.state.tValues;
  const lang = ctx.state.lang.value;
  return (
    <>
      <TranslationProvider
        initLabels={labels}
        initLang={lang}
      >
        <Header />
        <Hero />
        <Experiences />
        <Footer />
      </TranslationProvider>
    </>
    
  );
}
