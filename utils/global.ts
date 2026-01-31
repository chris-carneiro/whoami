import { createDefine } from "fresh";
import { Lang } from "./lang.ts";
import { Signal } from "@preact/signals";


export interface TranslationState {
  lang: Signal<Lang>;
}

export const define = createDefine<TranslationState>();


