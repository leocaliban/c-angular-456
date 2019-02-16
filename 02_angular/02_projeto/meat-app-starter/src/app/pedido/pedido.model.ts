class Pedido {

  constructor(
    public address: string,
    public number: number,
    public optional: string,
    public opcaoDePagamento: string,
    public itensDePedido: ItemDePedido[] = [],
    public id?: string
  ) { }
}

class ItemDePedido {
  constructor(
    public quantity: number,
    public menuId: string
  ) { }
}

export { Pedido, ItemDePedido }
