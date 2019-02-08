import { ItemMenu } from './../item-menu/item-menu.model';
import { ItemCarrinho } from './item-carrinho.model';

export class CarrinhoService {

  itens: ItemCarrinho[] = [];

  limpar() {
    this.itens = [];
  }

  adicionarItem(item: ItemMenu) {
    let foundItem = this.itens.find((itemDoCarrinho) => itemDoCarrinho.itemMenu.id === item.id);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.itens.push(new ItemCarrinho(item));
    }
  }

  removerItem(item: ItemCarrinho) {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  total(): number {
    return this.itens.map(
      item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}