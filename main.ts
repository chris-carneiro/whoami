
import { App, staticFiles } from "fresh";
import { TranslationState } from "./utils/global.ts";


export const app = new App<TranslationState>()
  .use(staticFiles())
  // Enable file-system based routing
  .fsRoutes();