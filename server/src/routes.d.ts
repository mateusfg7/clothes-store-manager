export interface IRequest {
  product: string; // produto
  quantity: number; // quantidade
  provider: string; // fornecedor
  price: number; // preço
  current_inventory: number; // estoque atual
  size: string; // tamanho
  input_values: number; // valor de entrada
  output_values: number; // valor de saida
}
