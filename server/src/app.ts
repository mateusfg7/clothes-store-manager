import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes.ts";

const PORT = config().PORT ?? 8000;

const app = new Application();

app.use(router.routes());

await app.listen({ port: Number(PORT) });
