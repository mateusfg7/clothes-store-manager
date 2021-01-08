import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes.ts";

const App = new Application();

App.use(router.routes());

App.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

if (import.meta.main) {
  const PORT = config().PORT ?? 8000;

  if (Deno.args.includes("--secure")) {
    await App.listen(
      {
        port: Number(PORT),
        secure: true,
        certFile: "./src/ssl/cert.pem",
        keyFile: "./src/ssl/key.pem",
      },
    );
  }

  await App.listen({ port: Number(PORT) });
}

export default App;
