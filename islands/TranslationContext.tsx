
import { createContext } from "preact";
import { useState } from "preact/hooks";
import { Labels } from "../i18n/labels.ts";
import { Lang } from "../utils/lang.ts";

export interface TranslationContextProps {
  labels: Labels;
  lang: Lang;
  setLabels: (labels: Labels) => void;
  setLang: (lang: Lang) => void;
}

export const TranslationContext = createContext<TranslationContextProps | null>(null);

export function TranslationProvider(
  { initLabels: initialLabels, initLang: initialLang, children }: {
    initLabels: Labels;
    initLang: Lang;
    children: preact.ComponentChildren;
  },
) {
  const [labels, setLabels] = useState<Labels>(initialLabels);
  const [lang, setLang] = useState<Lang>(initialLang);

  return (
    <TranslationContext.Provider value={{ labels, lang, setLabels, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
}
