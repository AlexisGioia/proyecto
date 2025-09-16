// JavaScript source code
const { prompt } = require("./prompt");
var matriz = []
function crearMes(){
    //for (let i = 0; i < 4; i++) {
        
    //    matriz[i] = azar;
    //}
    for (let x = 0; x < 4; x++) {
        matriz[x] = [];
        for (let y = 0; y < 7; y++) {
            matriz[x][y] = Math.floor(Math.random() * (99 - 10 + 1)) + 10;

        }
        
    }

}
crearMes();
console.log(matriz);
function gastosSemanales(indice) {
    let total = 0;

    for (let i = 0; i < 7; i++) {
        total += matriz[indice][i]; 
    }
    return total;
}
function gastoDia(dia) {
    let total = 0
    for (let i = 0; i < 4; i++) {
        total += matriz[i][dia];
    }
    return total;
}
function gastoTotal() {
    let total = 0;
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 7; y++) {
            total += matriz[x][y];
        }

    }
    return total;
}
function gastosXsemana(callback) {
    let matriz2 = []
    for (let i = 0; i < 4; i++) {
        matriz2[i]=callback(i);
    }
    return matriz2;
}
console.log(gastosXsemana(gastosSemanales));