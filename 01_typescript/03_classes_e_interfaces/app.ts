class Carro {
    constructor(public nitro: string) {

    }

    ativarNitro() {
        console.log(`Ativando nitro ${this.nitro}`);
    }
}

let carro = new Carro('NOX');
carro.ativarNitro();



class CarroVoador extends Carro implements Roda{
    rodas: number;

    constructor() {
        super('GTX');
        this.rodas = 50;
    }

    ativarNitro() {
        console.log(`Ativando nitro ${this.nitro} no carro voador com ${this.rodas} rodas.`);
    }
}

let carroVoador = new CarroVoador();
carroVoador.ativarNitro();


interface Roda {
    rodas: number;
}