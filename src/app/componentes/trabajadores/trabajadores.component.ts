import { Component } from '@angular/core';
import { Trabajador } from 'src/app/modelos/trabajador';
import { ServicioTrabajadorService } from 'src/app/servicios/servicio-trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {

  trabajadores:Array<Trabajador> = [];
  titulo:string = "";

  constructor(private servicioTrabajador:ServicioTrabajadorService) {}
  ngOnInit() {
    this.trabajadores = this.servicioTrabajador.getTrabajadores();
  }

borrarTrabajador(id:number){
  this.servicioTrabajador.borrar(id);
}
}
