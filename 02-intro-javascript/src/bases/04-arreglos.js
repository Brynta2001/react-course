//Arreglos en JS
//const arreglo = new Array( 100 );

const arreglo = [1,2,3,4];
//No es recomendable usar el push para ingresar elementos al arreglo, porque modifica el objeto principal
//arreglo.push(5);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
