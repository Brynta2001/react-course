//import { heroes } from './data/heroes';

//Con la importación por defecto se asigna el nombre al momento de importar
//import heroes from './data/heroes';

//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}

//console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner );
}

//console.log(getHeroeByOwner('DC'));