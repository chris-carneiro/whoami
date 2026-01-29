// islands/TranslationIsland.tsx
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import LanguageSwitch from "./LanguageSwitch.tsx";
import { TranslationProvider } from "./TranslationContext.tsx";
import { Labels } from "../i18n/labels.ts";
import { Lang } from "../utils/lang.ts";
import { Experiences } from "../components/Experiences.tsx";

export default function TranslationIsland({ initialLabels, initialLang }: { initialLabels: Labels; initialLang: Lang }) {
  return (
    <TranslationProvider initLabels={initialLabels} initLang={initialLang}>
      <Header />
      <Hero />
      <LanguageSwitch />
      <Experiences />
      <Footer />
    </TranslationProvider>
  );
}
