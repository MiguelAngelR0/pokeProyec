import { Ataque } from './ataque.model';
import {Stat} from '../models/stat.model'

export class PokemonBattle {
    nombre: string;
    ataques: Ataque[]; // Propiedad que es un array de Moves
    stats: Stat

    constructor(nombre: string, ataques: Ataque[],stats:Stat) {
        this.nombre = nombre;
        this.ataques = ataques;
        this.stats=stats;
    }


}



