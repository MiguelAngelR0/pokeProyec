 export class Ataque {
    name: string;
    power: number;
    accuracy:number;
    pp:number;
    type: string;

    
    constructor(name: string, power: number,acuarancy:number,pp:number,type:string) {
      this.name = name;
      this.power = power;
      this.accuracy = acuarancy;
      this.pp = pp;
      this.type= type;
    }
  }
  