import { EN, FR, Lang } from "../utils.ts";

const LABELS = new Map<Lang, Record<string, string>>();

function flattenLabels(
  obj: Record<string, unknown>,
  prefix = "",
): Record<string, string> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenLabels(value as Record<string, unknown>, path));
    } else {
      acc[path] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);
}

export async function warmupLabels(): Promise<void> {
  const [{ default: en }, { default: fr }] = await Promise.all([
    import("../static/json/en.json", { with: { type: "json" } }),
    import("../static/json/fr.json", { with: { type: "json" } }),
  ]);
  LABELS.set(EN, flattenLabels(en as Record<string, unknown>));
  LABELS.set(FR, flattenLabels(fr as Record<string, unknown>));
}

export function loadLabels(lang: Lang): Record<string, string> {
  const safeLang = lang ?? EN;
  return LABELS.get(safeLang) ?? LABELS.get(EN) ?? {};
}
