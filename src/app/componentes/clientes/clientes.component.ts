import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes:Cliente[]= [];
  titulo:string="";

  constructor(private servicioCliente:ServicioClienteService){}

ngOnInit() {
  this.clientes = this.servicioCliente.getClientes();
}

crearCliente(cliente:Cliente) {
  this.servicioCliente.crearCliente(cliente);
}

borrarCliente(id:number){
  this.servicioCliente.borrar(id);
}
}
