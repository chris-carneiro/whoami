import { useEffect } from "preact/hooks";
import { EN, FR, Lang } from "../utils.ts";

export interface Props {
  lang: Lang;
}

export default function LanguageSwitch({ lang }: Props) {
  useEffect(() => {
    const scroll = parseInt(location.hash.slice(1));
    if (scroll > 0) scrollTo({ top: scroll, behavior: "smooth" });
  }, []);

  return (
    <select
      onChange={(e) => {
        location.href = `/${e.currentTarget.value}#${scrollY}`;
      }}
    >
      <option value="fr" selected={lang === FR}>{FR}</option>
      <option value="en" selected={lang === EN}>{EN}</option>
    </select>
  );
}
