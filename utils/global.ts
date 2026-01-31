import { createDefine } from "fresh";
import { signal, Signal } from "@preact/signals";
import { Lang } from "./lang.ts";


export interface TranslationState {
  lang: Signal<Lang>;
}

export const define = createDefine<TranslationState>();


