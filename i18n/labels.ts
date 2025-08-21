import { EN, FR, Lang } from "../utils/lang.ts";
import en from "./json/en.json" with { type: "json" } ;
import fr from "./json/fr.json" with { type: "json" };

export type Labels = typeof en | typeof fr;

const _check: Labels = en || fr;

function flattenLabels(
  obj: Record<string, string>,
  prefix = "",
): Record<string, string> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenLabels(value, path));
    } else {
      acc[path] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);
}

const flattenedFr = flattenLabels(fr as Record<string, string>);
const flattenedEn = flattenLabels(en as Record<string, string>);

const LABELS = new Map<Lang, Record<string, string>>([
  [FR, flattenedFr],
  [EN, flattenedEn],
]);


export function translate(labelKey: string, lang: Lang): string {
  return LABELS.get(lang)![labelKey];
}
