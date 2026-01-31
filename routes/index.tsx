import { PageProps } from "fresh";
import { Experiences } from "../components/Experiences.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import { TranslationState } from "../utils/global.ts";
import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import { EN, Lang } from "../utils/lang.ts";
import { currentLang } from "../i18n/labels.ts";
import InitLocale from "../islands/InitLocale.tsx";

// export const Theme = createContext("light");

interface LocaleContextValue {
  locale: "en" | "fr";
  setLocale: (l: "en" | "fr") => void;
}

export const Locale = createContext<LocaleContextValue | null>(null);

interface LocaleContextValue {
  locale: "en" | "fr";
  setLocale: (l: "en" | "fr") => void;
}

export default function Home(ctx: PageProps<unknown, TranslationState>) {
  return (
    <>
      <InitLocale />
      <Header />
      <Hero />
      <Experiences />
      <Footer />
    </>
  );
}
