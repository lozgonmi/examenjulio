import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalidadesRoutingModule } from './localidades-routing.module';
import { LocalidadesComponent } from './localidades/localidades.component';
import { LocalidadComponent } from './localidades/localidad/localidad.component';


@NgModule({
  declarations: [LocalidadesComponent, LocalidadComponent],
  imports: [
    CommonModule,
    LocalidadesRoutingModule
  ]
})
export class LocalidadesModule { }
