import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { IRequest } from "./types.d.ts";

import Clothes from "../models/Clothes.ts";
import clothesView from "../views/clothes_view.ts";

export default {
  async create(context: RouterContext) {
    const request = context.request.body();

    if (request.type != "json") {
      context.response.status = 400;
      return;
    }

    const {
      product,
      type,
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
        type,
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

    context.response.body = clothesView.renderMany(clothes);
  },

  async show(context: RouterContext) {
    const id = await context.params.id;

    if (!id) {
      context.response.status = 500;
      return;
    }

    const clothesWithSpecificId = await Clothes.find(id);

    if (!clothesWithSpecificId) {
      context.response.status = 404;
      return;
    }

    context.response.body = clothesView.render(clothesWithSpecificId, {
      createdAt: clothesWithSpecificId.createdAt,
      updatedAt: clothesWithSpecificId.updatedAt,
    });
    context.response.status = 200;
  },

  async delete(context: RouterContext) {
    const id = await context.params.id;

    if (!id) {
      context.response.status = 500;
      return;
    }

    const clothesToBeDeleted = await Clothes.find(id);

    if (!clothesToBeDeleted) {
      context.response.status = 404;
      return;
    }

    Clothes.deleteById(id);
    context.response.status = 200;
  },
};
