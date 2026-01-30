import { EN, FR, Lang } from "../utils/lang.ts";

import { useTranslation } from "./TranslationContext.tsx";

interface LangItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export default function LanguageSwitch() {
    const { lang, setLang } = useTranslation();

  async function switchLang(newLang: Lang) {
    await fetch(`/api/lang?lang=${newLang}`, { method: "POST" });
    setLang(newLang);
  }
  
  return (
    <div class="text-rubedo inline-flex items-center gap-1">
      <LangItem
        label={FR}
        active={lang === FR}
        onClick={() => switchLang(FR)}
      />
      <span>|</span>
      <LangItem
        label={EN}
        active={lang === EN}
        onClick={() => switchLang(EN)}
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
