import Clothes from "../models/Clothes.ts";

export default {
  // deno-lint-ignore no-explicit-any
  render(clothes: Clothes, dates: Record<string, any>) {
    return {
      id: clothes.id,
      product: clothes.product,
      quantity: clothes.quantity,
      provider: clothes.provider,
      price: clothes.price,
      current_inventory: clothes.current_inventory,
      size: clothes.size,
      input_values: clothes.input_values,
      output_values: clothes.output_values,
      ...dates,
    };
  },
  renderMany(clothesList: Clothes[]) {
    return clothesList.map((clothes) =>
      this.render(clothes, {
        createdAt: clothes.createdAt,
        updatedAt: clothes.updatedAt,
      })
    );
  },
};
