import { Component, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokeApiService } from 'src/app/services/poke-api.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Route, Router } from '@angular/router';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements AfterViewInit {

  user: IUser | undefined;

  displayedColumns: string[] = ['position', 'name', 'picture', 'fav'];
  data: Pokemon[] = [];
  dataSource = new MatTableDataSource<Pokemon>;

  public pokemons: Pokemon[] = [];
  public pokemonsFav: Pokemon[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //otro metodo para pasar el id por Output
  //@Output() seleccionado = new EventEmitter<number>()

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private pokemonService: PokeApiService, private router: Router, private userFav: AuthServicePhp) {

  }


  ngOnInit(): void {


    //*Obtencion del usuario***************

    // Obtener la cadena JSON del almacenamiento sessionStorage
    const userStr = sessionStorage.getItem('user');

    // Convertir la cadena JSON en un objeto de JavaScript
    this.user = JSON.parse(userStr ?? '');
    console.log("este es mi usu",userStr)
    console.log("hay usuario", this.user?.id)

    //* Obtencion de sus pokemons favoritos************

    // Obtener la cadena JSON del almacenamiento sessionStorage


    // Convertir la cadena JSON en un objeto de JavaScript(hay que comprobar si es null antes de guardarla)
    const pokemonsFavString = sessionStorage.getItem('pokemonsFav');
    this.pokemonsFav = pokemonsFavString ? JSON.parse(pokemonsFavString) : [];

    console.log("hay pokemons Fav", this.pokemonsFav)



    this.pokemonService.getAllPokemons()
      .subscribe(pokemons => {

        console.table(pokemons)
        console.table(this.pokemonsFav)
        if (this.pokemonsFav.length == 0) {

          this.dataSource = new MatTableDataSource<Pokemon>(pokemons);
          this.dataSource.paginator = this.paginator;
        } else {
          //tengo que modificar el array de pokemons en la posicion donde tenga un pokemon favorito
          console.log("hay pokemons favoritos")

          // Recorrer los pokemons
          for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];

            // Comprobar si el pokemon es favorito
            for (let j = 0; j < this.pokemonsFav.length; j++) {
              const pokemonFav = this.pokemonsFav[j];

              if (pokemon.id === pokemonFav.id) {
                // Si el pokemon es favorito, modificar su propiedad 'favorite'
                pokemon.favorite = true;
              }
            }
          }

          this.dataSource = new MatTableDataSource<Pokemon>(pokemons);
          this.dataSource.paginator = this.paginator;
        }


      });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getRow(id: any) {
    console.log();

    this.router.navigateByUrl(`/dashboard/pokedetail/${id}`);
  }

  //crea al pokemon en la base de datos y lo relaciona en la tabla de relacion, obtener el id del usuario al que se le va a agregar el pokemon
  toggleFavorite(pokemon: Pokemon): void {

    pokemon.favorite = !pokemon.favorite;

    if (pokemon.favorite == true) {//es un pokemon favorito
      console.log("fevorito?" + pokemon.favorite)
     
      if (this.user) {
        this.userFav.addPokeFav(pokemon.id, pokemon.name, pokemon.pic, this.user.id).subscribe(
          (response) => {
            console.log("aniadido a favoritos" + response)


          },
          (error) => { console.log("NO lo esta " + error) }
        )

      }

    } else { //quitar de las dos tablas el pokemon
      if (this.user) {
        this.userFav.deletePokeFav(pokemon.id, pokemon.name, pokemon.pic, this.user.id).subscribe(
          (response) => {
            console.log("borrado de favoritos" + response)


          },
          (error) => { console.log("NO lo esta " + error) }
        )
      }
    }


  }




}
