export class Cliente{
  // siempre hay que decir el tipo de varibale


  nombre:string;
  email:string;
  telefono:string;
  password:string;
  usuario: any;
  // luego crear el constructor
  constructor(nombre:string,email:string,telefono:string,password:string){
    this.nombre=nombre;
    this.email=email;
    this.telefono=telefono;
    this.password=this.password;
  }

}
