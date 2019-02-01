"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var carro_base_1 = require("./carro-base");
var CarroVoador = /** @class */ (function (_super) {
    __extends(CarroVoador, _super);
    function CarroVoador() {
        var _this = _super.call(this, 'GTX') || this;
        _this.rodas = 50;
        return _this;
    }
    CarroVoador.prototype.ativarNitro = function () {
        console.log("Ativando nitro " + this.nitro + " no carro voador com " + this.rodas + " rodas.");
    };
    return CarroVoador;
}(carro_base_1.Carro));
exports.CarroVoador = CarroVoador;
