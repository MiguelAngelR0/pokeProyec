import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ability, FetchAllPokemonResponse, PokeDetail, Pokemon, PokemonDetail, Stat } from '../interfaces/pokemon.interfaces';
import { Move} from '../interfaces/move.interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  
  
  private url:string ='https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]>{
    return this.http.get<FetchAllPokemonResponse>(`${this.url}/pokemon?&limit=150`).pipe(
      map( this.transformSmallPokeIntoPoke)
    )
  }

  private transformSmallPokeIntoPoke(resp:FetchAllPokemonResponse):Pokemon[] {

    const pokemonList: Pokemon[] = resp.results.map(poke => {

      const urlArr = poke.url.split('/')
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      const favorite = false;

      return {
        id,
        pic,
        name:poke.name,
        favorite
      }
    })

    return pokemonList;
  }

 
  async getById(id:number):Promise<PokeDetail>{
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return await res.json();

  }
  
  async getByIdMove(id:string):Promise<Move>{
    
    const res = await fetch(`https://pokeapi.co/api/v2/move/${id}`)

    return await res.json();

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  


}
