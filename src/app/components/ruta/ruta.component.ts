import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeDetail } from 'src/app/interfaces/pokemon.interfaces';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.scss']
})
export class RutaComponent implements OnInit {
 

  remainingAttempts!: number;

  pokemon?: PokeDetail;

  pokemonListEasy: PokeDetail[] = [];
  pokemonListMed: PokeDetail[] = [];
  pokemonListH: PokeDetail[] = [];

  idPokemonsEasy: number[] = [1, 4, 7, 10, 13];
  idPokemonsMed: number[] = [2, 5, 8, 12, 15];
  idPokemonsH: number[] = [6, 9, 3, 150, 146];

  constructor(private pokemonService: PokeApiService, private router: Router) { }


  ngOnInit(): void {

    console.log('Cambios que te quedam', this.remainingAttempts)

    this.remainingAttempts = Number(localStorage.getItem('remainingAttempts'));

    console.log('Cambios que te quedam 2', this.remainingAttempts)

    // Verificar si es un nuevo día y reiniciar el número de intentos restantes a 3
    const lastSelectedDate = localStorage.getItem('lastSelectedDate');

    const currentDate = new Date().toDateString();
    console.log(currentDate)
    console.log(lastSelectedDate)

    const userStr = sessionStorage.getItem('user');
    console.log(userStr)

    if (lastSelectedDate !== currentDate) { //dia nuevo
      console.log('entra al dia de nuevo')
      localStorage.setItem('lastSelectedDate', currentDate);
      localStorage.setItem('remainingAttempts', '4');
      this.remainingAttempts = 4;

    }



    console.log('Cambios', this.remainingAttempts)


    localStorage.setItem('lastSelectedDate', currentDate);

    for (const id of this.idPokemonsEasy) {
      this.pokemonService.getById(id).then((pokemon) => {
        this.pokemonListEasy.push(pokemon);
      });
    }

    for (const id of this.idPokemonsMed) {
      this.pokemonService.getById(id).then((pokemon) => {
        this.pokemonListMed.push(pokemon);
      });
    }

    for (const id of this.idPokemonsH) {
      this.pokemonService.getById(id).then((pokemon) => {
        this.pokemonListH.push(pokemon);
      });
    }


  }

  generarPokemonAleatorio() {

    // Verificar si es un nuevo día y reiniciar el número de intentos restantes a 3
    const lastSelectedDate = localStorage.getItem('lastSelectedDate');

    const currentDate = new Date(2023, 1, 1).toDateString();

    console.log(lastSelectedDate)
    console.log(currentDate)

    if (lastSelectedDate !== currentDate) {
      console.log('nuevo dia')
      localStorage.setItem('lastSelectedDate', currentDate);
      localStorage.setItem('remainingAttempts', '4');
      this.remainingAttempts = 4;
    } else {
      // Obtener el número de intentos restantes del LocalStorage

      console.log("te quito intento")
      this.remainingAttempts = Number(localStorage.getItem('remainingAttempts')) - 1;

      localStorage.setItem('remainingAttempts', this.remainingAttempts.toString())

      const numeroAleatorio = Math.floor(Math.random() * 150) + 1;
      console.log(numeroAleatorio);


      this.pokemonService.getById(numeroAleatorio).then((pokemon) => {
        this.pokemon = pokemon
      })



    }

    if (this.remainingAttempts < 0) {
      this.remainingAttempts = 0;
      localStorage.setItem('remainingAttempts', '0')
    }


  }

  irABatalla(pokemonLista: number[], modo:string) {
    
    const posicionAleatoria = Math.floor(Math.random() * pokemonLista.length);
    const pokemonId = pokemonLista[posicionAleatoria];
    console.log(pokemonId)


    this.router.navigateByUrl(`/dashboard/battle/${this.pokemon?.id}/${pokemonId}/${modo}`);
  }





}
