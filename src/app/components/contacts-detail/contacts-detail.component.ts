import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {
  room: string | null = '';
  user!: IUser
  id!:number
  userId!: number

  pokemonsFav: [] | any;



  constructor(private activatedRouter: ActivatedRoute, private router: Router, private authService: AuthServicePhp) {

  }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(
      async params => {

        this.userId = params['room']
        
      }
    )


    this.authService.getAllUsers().subscribe((usuarios) => {
      const usuariosArray = Object.values(usuarios);

      for (const usuario of usuariosArray) {

        if (this.userId == usuario.id) {

          this.user = usuario
          
          break
        }
      }


      this.authService.getPokeFav(this.user.id).subscribe(
        (pokemons) => {
          console.log("Esto es lo que me llega de la respuesta getPokeFav")
          
  
          this.pokemonsFav = pokemons;
  
          //paso la lista de pokemons favoritos a la pagina pokedex por sessionStorage, PERO NO ME LA DEVUELVE ERROR QUE AVECES CAMBIA Y OTRAS NO 
          sessionStorage.setItem("pokemonsFav",JSON.stringify(this.pokemonsFav));
  
        },
        (error) => {
          (console.error(`Ha habido un error al hacer la respuesta de getPokeFav:`, JSON.stringify(error, null, 2)))
        }
      );


      
    })

   
  
  

  }

}
