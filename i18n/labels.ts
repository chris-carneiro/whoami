import en from "./json/en.json" with { type: "json" };
import fr from "./json/fr.json" with { type: "json" };

export type Labels = typeof en | typeof fr;

const _check: Labels = en || fr;
