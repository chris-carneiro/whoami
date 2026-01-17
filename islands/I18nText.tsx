import { useContext, useEffect, useState } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";
import { translate } from "../i18n/labels.ts";


// NO animation simple impl
// export default function I18nText({labelKey}: {labelKey: string}) {
//   const { lang } = useContext(TranslationContext)!;
//   return <span>{translate(labelKey, lang)}</span>;
// }

export default function I18nText({ labelKey }: { labelKey: string }) {
  const [animating, setAnimating] = useState(false);
  const { lang } = useContext(TranslationContext)!;

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 300);

    return () => clearTimeout(timeout);
  }, [lang]);

  return (
    <span key={lang}
      class={`bg-clip-text inset-0 transition-opacity ${
        animating ? "animate-fade-in" : ""
      }`}
    >
    {translate(labelKey, lang)}
    </span>
  );
}
