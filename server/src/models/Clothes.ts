import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

export default class Clothes extends Model {
  static table = "top_clothes";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product: DataTypes.STRING, // produto
    quantity: DataTypes.INTEGER, // quantidade
    provider: DataTypes.STRING, // fornecedor
    price: DataTypes.BOOLEAN, // preço
    current_inventory: DataTypes.INTEGER, // estoque atual
    size: DataTypes.STRING, // tamanho
    input_values: DataTypes.FLOAT, // valor de entrada
    output_values: DataTypes.FLOAT, // valor de saida
  };
}
