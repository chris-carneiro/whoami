import { currentLang, translate } from "../i18n/labels.ts";
import { marked } from "marked";

import { Lang } from "../utils/lang.ts";
import { useMemo } from "preact/hooks";

export default function I18nText({ labelKey, style }: I18nProps) {
  const html = useMemo(() => {
    const content = translate(labelKey, currentLang.value as Lang) ?? "";
    return marked.parse(content, { async: false }) as string;
  }, [labelKey, currentLang.value]);

  return (
    <div
      key={currentLang.value as Lang} // if we need to restart animation based on more than 1 variable => `${lang}:${labelKey}`
      class={`animate-fade-in transition-opacity 
        [&_a]:text-citrinitas
        [&_a]:underline 
        [&_a:hover]:text-albedo
        ${style ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export interface I18nProps {
  labelKey: string;
  style?: string;
}
