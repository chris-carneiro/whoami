import { marked } from "marked";

import { useEffect, useState } from "preact/hooks";

export default function I18nText({ labelKey, style }: I18nProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function load() {
      const label = await getLabel(labelKey);
      setHtml(marked.parse(label, { async: false }) as string);
    }
    load();
  }, []);

  return (
    <>
      <div
        key={`${labelKey}`}
        class={html
          ? `animate-fade-in transition-opacity 
        [&_a]:text-citrinitas
        [&_a]:underline 
        [&_a:hover]:text-albedo
        ${style ?? ""}`
          : `animate-pulse`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export interface I18nProps {
  labelKey: string;
  style?: string;
}

async function getLabel(labelKey: string): Promise<string> {
  const response = await fetch(`/api/lang/label?labelkey=${labelKey}`, {
    credentials: "include", // ensures cookies are sent
  });

  return await response.json();
}
