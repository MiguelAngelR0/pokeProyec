import { Pokemon } from "../interfaces/pokemon.interfaces";

//En resumen, los modelos son clases con funcionalidad y métodos adicionales, mientras que las interfaces son contratos que definen la estructura de un objeto sin implementación adicional. La elección entre modelos e interfaces depende de tus necesidades y del nivel de funcionalidad requerido para los objetos que estás definiendo.

export interface IUser{
    id: number;
    name:string;
    email:string;
    idPokemon:null;
    puntosExp:null;
    createDate:string;
    token:string;
    pokemonsFav:Pokemon[];
}