import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  clientes:Array<Cliente>= [];

  constructor(private servicioCliente:ServicioClienteService){}

  ngOnInit() {
    this.clientes = this.servicioCliente.getClientes();
  }

}
