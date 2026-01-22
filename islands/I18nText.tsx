import { useContext, useMemo } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";
import { translate } from "../i18n/labels.ts";
import { marked } from "marked";

export default function I18nText(props: I18nProps) {
  const { lang } = useContext(TranslationContext)!;
 
  const html = useMemo(() => {
    const content = translate(props.labelKey, lang) ?? "";
    return marked.parse(content, { async: false }) as string;
  }, [props.labelKey, lang]);

  return (
    <div
      key={lang} // if we need to restart animation based on more than 1 variable => `${lang}:${labelKey}`
      class={`animate-fade-in transition-opacity 
        [&_a]:text-citrinitas
        [&_a]:underline 
        [&_a:hover]:text-albedo
        ${props.style ?? ""}`}

      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export interface I18nProps {
  labelKey: string;
  style?: string;
}
