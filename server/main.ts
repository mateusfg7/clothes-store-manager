import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const PORT = config().PORT ?? 8000;

const app = new Application();

app.use((context) => {
  context.response.body = "Hello Word!";
});

await app.listen({ port: Number(PORT) });
