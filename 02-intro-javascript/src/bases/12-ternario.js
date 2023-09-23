const activo =  true;

/*let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}*/

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null;
//Se muestra el valor de la derecha si el valor de la izquierda es true
//Si el valor de la izquierda es false no se muestra nada
const mensaje = activo && 'Activo';

console.log(mensaje);