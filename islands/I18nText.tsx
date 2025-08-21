import { useContext } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";
import { translate } from "../i18n/labels.ts";

export default function I18nText({labelKey}: {labelKey: string}) {
  const { lang } = useContext(TranslationContext)!;
  return <span>{translate(labelKey, lang)}</span>;
}