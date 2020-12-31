export interface IRequest {
  product: string; // produto
  quantity: number; // quantidade
  provider: string; // fornecedor
  price: number; // preço
  currentInventory: number; // estoque atual
  size: string; // tamanho
  inputValues: number; // valor de entrada
  outputValues: number; // valor de saida
}
