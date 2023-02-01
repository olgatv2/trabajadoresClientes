import { Injectable } from '@angular/core';
import { Trabajador } from '../modelos/trabajador';

@Injectable({
  providedIn: 'root'
})
export class ServicioTrabajadorService {

  constructor() { }

  private titulo = "Listado de trabajadores";
  private trabajadores:Array<Trabajador> = [
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador'
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
    }
  ]



  public getTitulo() {
    return this.titulo;
  }

  public getTrabajadores(){
    return this.trabajadores;
  }

  public getById(id:number) {
    return this.trabajadores[id];
  }

  public borrar(id:number) {
    let trabajadorBorrado = this.trabajadores.findIndex(a=>a.id == id);
    this.trabajadores.splice(trabajadorBorrado,1);
  }

}
