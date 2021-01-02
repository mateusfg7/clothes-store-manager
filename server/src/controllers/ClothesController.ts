import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { IRequest } from "./types.d.ts";

import Clothes from "../models/Clothes.ts";

export default {
  async create(context: RouterContext) {
    const request = context.request.body();

    if (request.type != "json") {
      context.response.status = 400;
      return;
    }

    const {
      product,
      quantity,
      provider,
      price,
      currentInventory,
      size,
      inputValues,
      outputValues,
    }: IRequest = await request.value;

    await Clothes.create([
      {
        product,
        quantity, // quantidade
        provider, // fornecedor
        price, // preço
        current_inventory: currentInventory, // estoque atual
        size, // tamanho
        input_values: inputValues, // valor de entrada
        output_values: outputValues, // valor de saida
      },
    ]);

    context.response.status = 201;
  },

  async index(context: RouterContext) {
    const clothes = await Clothes.all();

    context.response.body = clothes;
  },

  async show(context: RouterContext) {
    const id = await context.params.id;

    const clothesWithSpecificId = await Clothes.where("id", id).get();

    if (clothesWithSpecificId.length === 0) {
      context.response.status = 404;
      return;
    }

    context.response.body = clothesWithSpecificId;
    context.response.status = 200;
  },
};
