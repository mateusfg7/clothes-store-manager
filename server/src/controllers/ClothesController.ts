import { Context } from "https://deno.land/x/oak/mod.ts";
import { IRequest } from "./types.d.ts";

import Clothes from "../models/Clothes.ts";

export default {
  async create(context: Context) {
    const {
      product,
      quantity,
      provider,
      price,
      currentInventory,
      size,
      inputValues,
      outputValues,
    }: IRequest = await context.request.body({ type: "json" })
      .value;

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
    context.response.body = { status: "created!" };
  },

  async index(context: Context) {
    const clothes = await Clothes.all();

    context.response.body = clothes;
  },
};
