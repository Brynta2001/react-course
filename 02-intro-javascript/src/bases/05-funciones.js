//Funciones en JS
//Se puede reasignar el valor asociado al nombre de la función
/*function saludar(nombre) {
    return `Hola ${nombre}`;
}
saludar = 30;
*/

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar('Bryan'));
console.log(saludar2('Bryan'));
console.log(saludar3('Bryan'));

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

console.log( getUser() );

//Tarea
/*
1. Transformar a una función de flecha
2. Tiene que retornar un objeto implícito
3. Pruebas
*/
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Bryan');
console.log(usuarioActivo);
