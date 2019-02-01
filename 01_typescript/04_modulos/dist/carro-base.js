"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(nitro) {
        this.nitro = nitro;
    }
    Carro.prototype.ativarNitro = function () {
        console.log("Ativando nitro " + this.nitro);
    };
    return Carro;
}());
exports.Carro = Carro;
// export {Carro, Roda}
