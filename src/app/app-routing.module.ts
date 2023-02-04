import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresComponent } from './componentes/trabajadores/trabajadores.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearClienteComponent } from './componentes/crear-cliente/crear-cliente.component';

const routes: Routes = [

  { path:'', component: InicioComponent },
  { path:'clientes', component: ClientesComponent },
  { path:'clientes/crear', component: CrearClienteComponent },
  { path:'trabajadores', component: TrabajadoresComponent},
  // { path:'trabajadores/modificar', component: ModificarTrabajadorComponent},
  { path:'**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
