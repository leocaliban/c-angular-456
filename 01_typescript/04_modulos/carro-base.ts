export class Carro {
    constructor(public nitro: string) {

    }

    ativarNitro() {
        console.log(`Ativando nitro ${this.nitro}`);
    }
}

export interface Roda {
    rodas: number;
}

// export {Carro, Roda}