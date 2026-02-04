import { createDefine } from "fresh";
import { Lang } from "./lang.ts";

export interface TranslationState {
  lang: Lang;
}

export const define = createDefine<TranslationState>();


