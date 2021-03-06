import { DataTypes, Model } from "../deps.ts";

export default class Clothes extends Model {
  static table = "clothes";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product: DataTypes.STRING, // produto
    brand: DataTypes.STRING,
    quantity: DataTypes.INTEGER, // quantidade
    provider: DataTypes.STRING, // fornecedor
    price: DataTypes.FLOAT, // preço
    current_inventory: DataTypes.INTEGER, // estoque atual
    size: DataTypes.STRING, // tamanho
    input_values: DataTypes.FLOAT, // valor de entrada
    output_values: DataTypes.FLOAT, // valor de saida
  };
}
