import { useState } from "preact/hooks";
import { EN, FR, Lang } from "../utils/lang.ts";

import { useTranslation } from "./TranslationContext.tsx";


export default function LanguageSwitch() {
  const { lang, setLang } = useTranslation();
  const [locale, setLocale] = useState(lang);

  async function switchLang(newLang: Lang) {
    await fetch(`/api/lang?lang=${newLang}`, { method: "POST" });
    setLang(newLang);
    setLocale(newLang);
  }

  return (
    <select
      class="appearance-none bg-transparent p-2 rounded"
      value={locale}
      onChange={(e) =>
        switchLang((e.currentTarget as HTMLSelectElement).value as Lang)}
    >
      <option value="fr">{`${FR}`}</option>
      <option value="en">{`${EN}`}</option>
    </select>
  );
}
