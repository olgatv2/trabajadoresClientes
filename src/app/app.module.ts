import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { TrabajadoresComponent } from './componentes/trabajadores/trabajadores.component';
import { Error404Component } from './componentes/error404/error404.component';
import { CrearClienteComponent } from './componentes/crear-cliente/crear-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ClientesComponent,
    Error404Component,
    TrabajadoresComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
