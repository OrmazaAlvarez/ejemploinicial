import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { AcerdadeComponent } from './acerdade/acerdade.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LibrosseleccionadosService } from './librosseleccionados.service';

const rustasApp:Routes = [
  { path:'', component: InicioComponent, pathMatch: 'full' },
  { path:'colores', component: ColoresComponent },
  { path:'ngif', component: NgifComponent },
  { path:'ngfor', component: NgforComponent },
  { path:'nosotros', component: AcerdadeComponent },
  { path:'detalle', redirectTo: 'ngfor' },
  { path:'detalle/:id', component: DetallesComponent }
]
// TODO: Agregar el componente de error
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    ColoresComponent,
    SaludoComponent,
    NgifComponent,
    NgforComponent,
    AcerdadeComponent,
    DetallesComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rustasApp), 
    HttpClientModule
  ],
  providers: [
    LibrosseleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
