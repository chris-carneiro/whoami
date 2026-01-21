import { useContext } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";
import { translate } from "../i18n/labels.ts";

export default function I18nText({ labelKey }: { labelKey: string }) {
  const { lang } = useContext(TranslationContext)!;

  return (
    <>
      <span
        key={lang} // if we need to restart animation based on more than 1 variable => `${lang}:${labelKey}`
        class="animate-fade-in transition-opacity"
      >
        {translate(labelKey, lang)}
      </span>
    </>
  );
}
