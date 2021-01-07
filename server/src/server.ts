import { config } from "https://deno.land/x/dotenv/mod.ts";
import App from "./app.ts";

const PORT = config().PORT ?? 8000;

App.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

await App.listen({ port: Number(PORT) });
