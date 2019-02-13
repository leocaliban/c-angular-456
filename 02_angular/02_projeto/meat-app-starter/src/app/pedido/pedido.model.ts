class Pedido {

  constructor(
    public address: string,
    public number: number,
    public optional: string,
    public opcaoDePagamento: string,
    public itensDePedido: ItemDePedido[] = []
  ) { }
}

class ItemDePedido {
  constructor(
    public quantity: number,
    public menuId: string
  ) { }
}

export { Pedido, ItemDePedido }
