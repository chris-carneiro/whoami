import { createDefine } from "fresh";
import { Lang } from "./lang.ts";

export interface State {
  lang: Lang;
}

export const define = createDefine<State>();


