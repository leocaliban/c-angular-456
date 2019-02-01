var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Função com arrow function
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('James');
// Função com valor default
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 2) = " + inc(5, 2));
console.log("inc (5) = " + inc(5));
