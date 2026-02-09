import { createDefine } from "fresh";

export type Lang = "en" | "fr";
export const FR = "fr" as Lang;
export const EN = "en" as Lang;


export interface State {
  lang: string;
}

export const define = createDefine<State>();


