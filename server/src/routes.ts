import { Router } from "https://deno.land/x/oak/mod.ts";

import database from "./database/connection.ts";

import Clothes from "./models/Clothes.ts";
import ClothesController from "./controllers/ClothesController.ts";

database.link([Clothes]);
database.sync();

const router = new Router();

router.get("/", (context) => {
  context.response.body = { message: "Hello word!" };
});

router.post("/clothes", ClothesController.create);
router.get("/clothes", ClothesController.index);
router.get("/clothes/:id", ClothesController.show);
router.delete("/clothes/:id", ClothesController.delete);

export default router;
