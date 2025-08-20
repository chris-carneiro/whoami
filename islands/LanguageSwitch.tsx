import { EN, FR, Lang } from "../utils/lang.ts";
import { useContext } from "preact/hooks";
import { TranslationContext } from "./TranslationContext.tsx";

import en from "../i18n/json/en.json" with { type: "json" };
import fr from "../i18n/json/fr.json" with { type: "json" };
import { Labels } from "../i18n/labels.ts";

interface LangItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export default function LanguageSwitch() {
  const context = useContext(TranslationContext)!;

  if (!context) {
    throw new Error(
      "TranslationContext must be used within a TranslationProvider",
    );
  }

  const { lang, setLang, setLabels } = context;

  async function switchLang(newLang: Lang, labels: Labels) {
    await fetch(`/api/lang?lang=${newLang}`, { method: "POST" });
    setLabels(labels);
    setLang(newLang);
  }
  
  return (
    <div class="text-rubedo inline-flex items-center gap-1">
      <LangItem
        label={FR}
        active={lang === FR}
        onClick={() => switchLang(FR, fr)}
      />
      <span>|</span>
      <LangItem
        label={EN}
        active={lang === EN}
        onClick={() => switchLang(EN, en)}
      />
    </div>
  );
}

function LangItem({ label, active, onClick }: LangItemProps) {
  return (
    <button
      type="button"
      aria-label={`to ${label}`}
      onClick={onClick}
      class={`${
        active ? "text-citrinitas" : "text-nigredo hover:text-citrinitas"
      } cursor-pointer`}
    >
      {label}
    </button>
  );
}
