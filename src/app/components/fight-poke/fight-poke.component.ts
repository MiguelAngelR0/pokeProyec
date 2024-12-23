import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeDetail, Pokemon, PokemonDetail } from 'src/app/interfaces/pokemon.interfaces';
import { Move } from 'src/app/interfaces/move.interfaces'
import { PokeApiService } from 'src/app/services/poke-api.service';
import { __param } from 'tslib';
import { PokemonBattle } from '../../models/pokemon.model';

import { Stat } from '../../models/stat.model';
import { Ataque } from 'src/app/models/ataque.model';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-fight-poke',
  templateUrl: './fight-poke.component.html',
  styleUrls: ['./fight-poke.component.scss']
})
export class FightPokeComponent implements OnInit {
  user: IUser | undefined;

  id: number = 19;
  idE: number = 3;
  modo: string = '';

  move!: Move;
  //* visual 
  pokemon?: PokeDetail;
  MAX_HP?: number;
  MAX_HPE?: number;
  pokemonE?: PokeDetail;

  ataques: Move[] | any = [];
  ataquesE: Move[] | any = [];
  pokemonBattle!: PokemonBattle;
  pokemonBattleEnemy!: PokemonBattle;

  mostrarAtaques: boolean = false;
  mostrarPociones: boolean = false;

  
  mensajeAtaque: string = '';
  mensajeAtaqueEnemigo: string = '';




  constructor(private pokemonService: PokeApiService, private activatedRouter: ActivatedRoute, private router: Router, private authService: AuthServicePhp) {


  }

  ngOnInit(): void {

   
    const userStr = sessionStorage.getItem('user');
    // Convertir la cadena JSON en un objeto
    this.user = JSON.parse(userStr ?? '');

    console.log("hay usuario", this.user)

    async (_params: any) => {
      this.pokemon = await this.pokemonService.getById(this.id)

    }

    

    this.activatedRouter.params.subscribe(
      async params => {

        this.id = params['id']
        this.idE = params['idE']
        this.modo = params['modo']

        this.pokemon = await this.pokemonService.getById(this.id) 
        this.MAX_HP = this.pokemon.stats[0].base_stat


        this.pokemonE = await this.pokemonService.getById(this.idE)
        this.MAX_HPE = this.pokemonE!.stats[0].base_stat
        let index = 0;
        for (const move of this.pokemon?.moves || []) {
          if (index >= 4) {
            break; 
          }
          this.ataques[index] = await this.detallesAtaque(move.move.name);
          
          index++;
        }


        let i = 0;
        for (const move of this.pokemonE?.moves || []) {
          if (i >= 4) {
            break; // Exit the loop after four iterations
          }
          this.ataquesE[i] = await this.detallesAtaque(move.move.name);
          // console.log('move', this.ataquesE[index]);
          i++;
        }
       
        
        //ataques this.ataques
        const statBattle = new Stat(this.pokemon?.stats[0].base_stat, this.pokemon?.stats[1].base_stat, this.pokemon?.stats[2].base_stat, this.pokemon?.stats[3].base_stat, this.pokemon?.stats[4].base_stat, this.pokemon?.stats[5].base_stat)

        this.pokemonBattle = new PokemonBattle(this.pokemon.name, this.ataques, statBattle)

        
        const statBattleEnemy = new Stat(this.pokemonE?.stats[0].base_stat, this.pokemonE?.stats[1].base_stat, this.pokemonE?.stats[2].base_stat, this.pokemonE?.stats[3].base_stat, this.pokemonE?.stats[4].base_stat, this.pokemonE?.stats[5].base_stat)
        this.pokemonBattleEnemy = new PokemonBattle(this.pokemonE.name, this.ataquesE, statBattleEnemy)
      }
    )


  }


  
  atacar(atack: Ataque) {

    if (atack && atack.power) {
      atack.pp--;
      this.pokemonBattleEnemy.stats.hp = this.pokemonBattleEnemy.stats.hp - this.damage(1, this.pokemonBattle.stats.attack, atack.power, this.pokemonBattleEnemy.stats.defense);
      if (this.pokemonBattleEnemy.stats.hp <= 0) {
        console.log('¡Has ganado la batalla!');
        this.ganas()
      }
      this.mensajeAtaque = `¡Has atacado con ${atack.name} y has infligido ${this.damage(1, this.pokemonBattle.stats.attack, atack.power, this.pokemonBattleEnemy.stats.defense)} puntos de daño!`;
    }
    this.devolverAtaque();
  }
  devolverAtaque() {
    const randomAttackIndex = Math.floor(Math.random() * this.pokemonBattleEnemy.ataques.length);
    console.log(this.pokemonBattleEnemy.ataques[randomAttackIndex].name, this.pokemonBattleEnemy.ataques[randomAttackIndex].power)
    this.pokemonBattle.stats.hp = this.pokemonBattle.stats.hp - this.damage(1, this.pokemonBattleEnemy.stats.attack, this.pokemonBattleEnemy.ataques[randomAttackIndex].power, this.pokemonBattleEnemy.stats.defense);
    this.mensajeAtaqueEnemigo = `¡Ha atacado con ${this.pokemonBattleEnemy.ataques[randomAttackIndex].name} y has infligido ${this.damage(1, this.pokemonBattleEnemy.stats.attack, this.pokemonBattleEnemy.ataques[randomAttackIndex].power, this.pokemonBattleEnemy.stats.defense)} puntos de daño!`;
  }
  damage(attackerLevel: number, attackPower: number, attackerAttack: number, defenderDefense: number): number {
    const levelFactor = (2 * attackerLevel / 5) + 2;
    const attackFactor = attackerAttack;
    const defenseFactor = defenderDefense;
    const basePower = attackPower;
    const damage = Math.floor(((levelFactor * attackFactor * basePower) / defenseFactor) / 50) + 2;
    return damage;
  }



  volver() {
    this.mostrarAtaques = false;
  }

  realizarBatalla() {
    
    this.mostrarAtaques = true;

    if (this.pokemonBattleEnemy.stats.hp <= 0) {
      console.log('¡Has ganado la batalla!');
      this.ganas()
      
      return;
    }

    
    if (this.pokemonBattle.stats.hp <= 0) {
      console.log('¡Has sido derrotado!');
      
      return;
    }

   
  }


  

  huir() {
    this.router.navigate(['/dashboard/battle/']);
  }
  
  ganas() {  

    this.authService.aniadirExp(this.modo, this.user!.id).subscribe(
      (respuesta) => {
        console.log("Esto es lo que me llega de la respuesta", respuesta)
      },
      (error) => {
        (console.error(`Ha habido un error: `, JSON.stringify(error, null, 2)))
      }
    );
  }

  usarPocion() {  

  }

  detallesAtaque(nombreA: string) {
    return this.pokemonService.getByIdMove(nombreA)
  }




  calcularPorcentajeVida(hp: number): string {
    
    const porcentaje = (hp * 100);

    let porcentajeFalta = porcentaje / this.MAX_HP!

    const progressBarWidth = `${porcentajeFalta}%`;

    return progressBarWidth;

  }

  calcularPorcentajeVidaE(hp: number): string {
    

    const porcentaje = (hp * 100);

    let porcentajeFalta = porcentaje / this.MAX_HPE!

    const progressBarWidth = `${porcentajeFalta}%`;

    return progressBarWidth;

  }





}
