import { EN, FR, Lang } from "../utils.ts";

export interface ExperienceData {
  jobtitle: string;
  details: string;
  description: string;
}

const LABELS = new Map<Lang, Record<string, string>>();
const EXPERIENCES = new Map<Lang, ExperienceData[]>();

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

  const { experiences: enExp, ...enRest } = en as unknown as {
    experiences: ExperienceData[];
    [key: string]: unknown;
  };
  const { experiences: frExp, ...frRest } = fr as unknown as {
    experiences: ExperienceData[];
    [key: string]: unknown;
  };

  LABELS.set(EN, flattenLabels(enRest as Record<string, unknown>));
  LABELS.set(FR, flattenLabels(frRest as Record<string, unknown>));
  EXPERIENCES.set(EN, enExp);
  EXPERIENCES.set(FR, frExp);
}

export function loadLabels(lang: Lang): Record<string, string> {
  const safeLang = lang ?? EN;
  return LABELS.get(safeLang) ?? LABELS.get(EN) ?? {};
}

export function loadExperiences(lang: Lang): ExperienceData[] {
  const safeLang = lang ?? EN;
  return EXPERIENCES.get(safeLang) ?? EXPERIENCES.get(EN) ?? [];
}
