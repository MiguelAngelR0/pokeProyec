import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { IUser } from 'src/app/models/user.interface';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: IUser | undefined;
  pokemonsFav: [] | any;

  public pokemons: Pokemon[] =[]

  constructor(private authService: AuthServicePhp) { }

  //recuperar los datos JSON y pasarlos
  ngOnInit(): void {

    // Obtener la cadena JSON del almacenamiento sessionStorage
    const userStr = sessionStorage.getItem('user');

    // Convertir la cadena JSON en un objeto de JavaScript
    this.user = JSON.parse(userStr ?? '');

    console.log("hay usuario", this.user)

    if (this.user) {
    
      this.authService.getPokeFav(1).subscribe(
        (pokemons) => {
          console.log("Esto es lo que me llega de la respuesta getPokeFav")
          

          this.pokemonsFav = pokemons;

          //paso la lista de pokemons favoritos a la pagina pokedex por sessionStorage
          sessionStorage.setItem("pokemonsFav",JSON.stringify(this.pokemonsFav));

        },
        (error) => {
          (console.error(`Ha habido un error al hacer la respuesta de getPokeFav:`, JSON.stringify(error, null, 2)))
        }
      );


    }

  }

  //crea al pokemon en la base de datos y lo relaciona en la tabla de relacion, obtener el id del usuario al que se le va a agregar el pokemon
  toggleFavorite(pokemon: Pokemon): void {
    console.log(pokemon)
    // pokemon.favorite = !pokemon.favorite;

    if (pokemon.favorite == true) {//es un pokemon favorito
      console.log("fevorito?" + pokemon.favorite)
      console.log("id?" + pokemon.id)
      console.log("id?" + pokemon.pic)
      console.log("id?" + pokemon.name)

      if (this.user) {
        
        this.authService.addPokeFav(pokemon.id, pokemon.name, pokemon.pic, 1).subscribe(
          (response) => {
            console.log("aniadido a favoritos" + response)

          },
          (error) => { console.log("NO lo esta " + error) }
        )

      }

    } else { 
      if (this.user) {
        this.authService.deletePokeFav(pokemon.id, pokemon.name, pokemon.pic, 1).subscribe(
          (response) => {
            console.log("borrado de favoritos" + response)


          },
          (error) => { console.log("NO lo esta " + error) }
        )
      }
    }


  }




}
