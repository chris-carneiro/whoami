import { useEffect } from "preact/hooks";
import { currentLang } from "../i18n/labels.ts";
import { Lang } from "../utils/lang.ts";

export default function InitLocale() {
  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((c) => c.startsWith("lang="))
      ?.split("=")[1];

    if (cookieLang) {
      currentLang.value = cookieLang as Lang;
    }
  }, []);

  return null;
}
