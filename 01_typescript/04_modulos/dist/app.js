"use strict";
exports.__esModule = true;
var carro_base_1 = require("./carro-base");
var carro_voador_1 = require("./carro-voador");
var carro = new carro_base_1.Carro('NOX');
carro.ativarNitro();
var carroVoador = new carro_voador_1.CarroVoador();
carroVoador.ativarNitro();
