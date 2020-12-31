import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const PORT = config().PORT ?? 8000;

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello Word!";
});

router.get("/test", (context) => {
  context.response.body = "Test!";
});

app.use(router.routes());

await app.listen({ port: Number(PORT) });
