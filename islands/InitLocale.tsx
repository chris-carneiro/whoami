import { useEffect } from "preact/hooks";
import { currentLang } from "../i18n/labels.ts";
import { EN, Lang } from "../utils/lang.ts";

export default function InitLocale() {
  useEffect(() => {
      fetch("/api/lang/current")
        .then((res) => res.json())
        .then((data) => {
          currentLang.value = (data.lang ?? EN) as Lang;
          localStorage.setItem("lang", currentLang.value);
        })
        .catch(() => {
          currentLang.value = EN;
          localStorage.setItem("lang", currentLang.value);
        });
  }, []);

  return null;
}
