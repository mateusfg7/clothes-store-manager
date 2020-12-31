import { Router } from "https://deno.land/x/oak/mod.ts";

import ClothesController from "./controllers/ClothesController.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = { message: "Hello word!" };
});

router.get("/create", ClothesController.create);

export default router;
