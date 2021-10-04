export class Personaje{
    nombre:string="";
    estado:string="";
    especie:string="";
    genero:string="";
    origen:string="";

    constructor(nombre:string, estado:string, especie:string, genero:string, origen:string){
        this.nombre = nombre;
        this.estado = estado;
        this.especie = especie;
        this.genero = genero;
        this.origen = origen;
    }

}