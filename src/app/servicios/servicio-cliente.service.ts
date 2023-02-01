import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor() { }

  private titulo:string = "Listado de clientes";

  private clientes:Array<Cliente>= [
    {
      id:1,
      nombre: 'Ana',
      apellido: 'Pedros'
    },
    {
      id:2,
      nombre: 'Elena',
      apellido: 'Monleón'
    },
    {
      id:3,
      nombre: 'Juan',
      apellido:'Antonio'
    },
    {
      id:4,
      nombre: 'Luis',
      apellido: 'González'
    },
    {
      id:5,
      nombre: 'Maria',
      apellido: 'Torrejón'
    },
    {
      id:6,
      nombre: 'Pedro',
      apellido: 'Piqueras'
    }
  ]

  public getTitulo() {
    return this.titulo;
  }

  public getClientes() {
    return this.clientes;
  }

  public getById(id:number) {
    return this.clientes[id];
  }

  public crearCliente(cliente:Cliente) {
    this.clientes.push(cliente);
    console.log("Cliente creado");
  }

  public borrar(id:number) {
    let clienteBorrar = this.clientes.findIndex(a=>a.id == id);
    this.clientes.splice(clienteBorrar,1);
  }
}
