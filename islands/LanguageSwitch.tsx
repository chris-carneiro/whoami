import { EN, FR, Lang } from "../utils/lang.ts";
import { currentLang } from "../i18n/labels.ts";

export default function LanguageSwitch() {

  async function switchLang(newLang: Lang) {
    currentLang.value = newLang;
    await fetch(`/api/lang?lang=${newLang}`, { method: "POST" });
  }

  return (
    <select
      class="appearance-none bg-transparent p-2 rounded"
      value={currentLang.value}
      onChange={(e) => {
        switchLang(e.currentTarget.value as Lang);
      }}
    >
      <option value="fr">{`${FR}`}</option>
      <option value="en">{`${EN}`}</option>
    </select>
  );
}
