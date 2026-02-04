
import { EN, FR, Lang } from "../utils/lang.ts";


interface Props {
  lang: Lang;
}


export default function LanguageSwitch({ lang }: Props) {
  async function switchLang(newLang: Lang) {

    await fetch("/api/lang", {
      method: "POST",
      body: JSON.stringify({ lang: newLang }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    location.reload();
  }

  return (
    <select
      value={lang}
      onChange={(e) => switchLang(e.currentTarget.value as Lang)}
    >
      <option value="fr">{FR}</option>
      <option value="en">{EN}</option>
    </select>
  );
}
