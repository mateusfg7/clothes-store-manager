import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello Word!";
});

router.get("/test", (context) => {
  context.response.body = "Test!";
});

export default router;
