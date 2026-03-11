import { App, staticFiles } from "fresh";
import { State } from "./utils.ts";
import { warmupLabels } from "./i18n/labels.ts";

await warmupLabels();

export const app = new App<State>();

app.use(staticFiles());
app.fsRoutes();
