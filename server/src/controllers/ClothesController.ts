import { Context } from "https://deno.land/x/oak/mod.ts";

import { IRequest } from "./types.d.ts";

export default {
  async create(context: Context) {
    const request: IRequest = await context.request.body({ type: "json" })
      .value;

    if (typeof request != "object") {
      context.response.status = 400;
      return;
    }

    context.response.status = 200;
    context.response.body = request;
  },
};
