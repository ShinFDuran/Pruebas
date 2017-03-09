// Esta clase define las propiedades de un héroe
// puede ser una clase o un interfaz
export class Heroe {
  id: number;
  name: string;

  constructor(id:number, name:string){
    // Inicialización de las variables en el constructor
    this.id = id;
    this.name = name;
  }
}
