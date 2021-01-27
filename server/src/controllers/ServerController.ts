import { RouterContext } from "../deps.ts";

import Clothes from "../models/Clothes.ts";

export default {
  async stats(context: RouterContext) {
    const numberOfRegisterClothes = await Clothes.count();

    context.response.body = {
      numberOfRegisterClothes,
    };
    context.response.status = 200;
  },
};
