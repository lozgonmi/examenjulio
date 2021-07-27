import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalidadesRoutingModule } from './localidades-routing.module';
import { LocalidadesComponent } from './localidades/localidades.component';
import { LocalidadComponent } from './localidades/localidad/localidad.component';
import { LocalidadEditarComponent } from './localidad-editar/localidad-editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LocalidadesComponent, LocalidadComponent, LocalidadEditarComponent],
  imports: [
    CommonModule,
    LocalidadesRoutingModule,
    FormsModule
  ]
})
export class LocalidadesModule { }
