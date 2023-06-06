import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeDetail, PokemonDetail } from 'src/app/interfaces/pokemon.interfaces';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements AfterViewInit{
  id:number=0;
  name:string="";
  pokeDetail?:PokeDetail;
 

 

  constructor(private pokemonService: PokeApiService ,private activatedRouter:ActivatedRoute) {
   
  }

  ngAfterViewInit() {
    this.activatedRouter.params.subscribe(
      async params =>{
        
        this.id=params['id']
        this.name=params['name'];
        console.log(this.name)

        this.pokeDetail= await this.pokemonService.getById(this.id)

        console.log(this.pokeDetail);

      }
    )
  }


  ngOnInit(): void {



  }

  //si pokeDetail es nulo, la expresión fav ?? false proporcionará el valor false como valor predeterminado para la propiedad favorite.

  toggleFavorite(): void {
    if (this.pokeDetail) {
      const newFavoriteValue = !this.pokeDetail.favorite;
      this.pokeDetail.favorite = newFavoriteValue;
      // this.pokemonService.updatePokemon(this.pokeDetail).subscribe(() => {
      //   console.log(`Pokemon ${this.pokeDetail.name} marked as favorite: ${newFavoriteValue}`);
      // });
    }
  }
  //*Para hacerlo con un output
  // pokemonSeleccionado(e:number){
  //   console.log(e)
  // }

  
}

