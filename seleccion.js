let elementos = [1, 5, 8, 0, 10, 89, 34, 22, 89, 88, 0, -10, -55, -10, -1];
let total = elementos.length;
let salida = ""
console.clear();
console.log("Elementos desordenados:");
elementos.forEach((elemento) =>
    salida += "[" + elemento + "]"
)
console.log(salida)

/******************************/


for (pivote = 0; pivote < total; pivote++) {
    min = pivote
    for (i = pivote + 1; i < total; i++)
        if (elementos[i] < elementos[min])
            min = i
    aux = elementos[pivote]
    elementos[pivote] = elementos[min]
    elementos[min] = aux

}
salida = ""
elementos.forEach((elemento) =>
    salida += "[" + elemento + "]"
)
console.log(salida)
