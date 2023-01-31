import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [

  { path:'', component: InicioComponent },
  { path:'clientes', component: ClientesComponent },
  { path:'articulos', component: ArticulosComponent},
  { path:'**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
