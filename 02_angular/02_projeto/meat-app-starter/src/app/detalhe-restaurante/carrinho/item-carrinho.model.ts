import { ItemMenu } from '../item-menu/item-menu.model';

export class ItemCarrinho {
  constructor(
    public itemMenu: ItemMenu,
    public quantity = 1) { }

  value(): number {
    return this.itemMenu.price * this.quantity;
  }
}
