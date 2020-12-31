import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = { message: "Hello word!" };
});

router.get("/create", async (context) => {
  const request = await context.request.body({ type: "json" }).value;

  if (typeof request != "object") {
    console.log("Is an object");
    context.response.status = 400;
    return;
  }

  context.response.status = 200;
  context.response.body = request;
});

export default router;
