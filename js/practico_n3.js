// JavaScript source code
// bubble sort 
let matriz = [2, 5, 1, 8, 4, 8, 454, 23, 6, 7, 432];
let temas = [{ nombre: "tem1", votos: 23 },
            { nombre:"tem2", votos: 12}, {
        nombre:"tem3",
        votos: 4
    }, {
        nombre:"tem4",
        votos: 34
    }, {
        nombre:"tem5",
        votos: 20
    }
]
let variableTemp = null;
for (let x = 0; x < matriz.length; x++) {
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i] < matriz[i - 1]) {
            variableTemp = matriz[i];
            matriz[i] = matriz[i - 1];
            matriz[i - 1] = variableTemp;
        }
    }

}
function ordenado(array) {

    for (let x = 0; x < array.length - 1; x++) {
        if (array[x] <= array[x + 1]) {
            console.log(array[x] + " < " + array[x+1]);
        }
        else { return "NO"; }
    }
  
    return "SI";
}
//console.log(ordenado(matriz));

function buscarCantidad(array, num) {
    counter = 0;
    for (let x = 0; x < array.length; x++) {
        if (array[x] === num){
            counter += 1;
        }

    }
    return counter;
}
//console.log(buscarCantidad(matriz, 1));

function votos(array,tema) {
    // busqueda lineal

    for (let x = 0; x < array.length; x++) {
        if (array[x].nombre === tema) {

            return array[x].votos;
        }
    }

    // busqueda binaria
    indiceBusqueda = 0;
    limiteBusqueda = array.length - 1;
    while (indiceBusqueda <= limiteBusqueda) {
        const indicemitad = Math.round(indiceBusqueda + limiteBusqueda / 2);
        const elemMedio = array[indicemitad];
        if (elemMedio.nombre == tema) {
            return elemMedio.votos;
        }
        if (elemMedio.nombre > tema) {
            limiteBusqueda = indicemitad - 1
        }
        else if (elemMedio.nombre < tema) {
            limiteBusqueda = indicemitad + 1
        }
        else {
            return "NO MATCH"
        }
    }
}
console.log(votos(temas, "tem2"));