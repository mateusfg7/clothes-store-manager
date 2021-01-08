import { superoak } from "https://deno.land/x/superoak@3.0.1/mod.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.83.0/testing/asserts.ts";

import App from "../app.ts";

Deno.test({
  name: "GET /",
  fn: async () => {
    const request = await superoak(App);
    await request.get("/")
      .expect(200)
      .expect({
        message: "Hello word!",
      });
  },
});

Deno.test({
  name: "GET /clothes",
  fn: async () => {
    const request = await superoak(App);
    const route = await request.get("/clothes");

    assertEquals(route.statusCode, 200);
    assert(typeof route.body === "object");
  },
});
