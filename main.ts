
import { App, staticFiles } from "fresh";
import { State } from "./utils/global.ts";


export const app = new App<State>()
  .use(staticFiles())
  // Enable file-system based routing
  .fsRoutes();