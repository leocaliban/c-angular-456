import { Carro, Roda } from './carro-base';

export class CarroVoador extends Carro implements Roda {
    rodas: number;

    constructor() {
        super('GTX');
        this.rodas = 50;
    }

    ativarNitro() {
        console.log(`Ativando nitro ${this.nitro} no carro voador com ${this.rodas} rodas.`);
    }
}