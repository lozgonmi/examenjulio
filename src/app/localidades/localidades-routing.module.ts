import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalidadEditarComponent } from './localidad-editar/localidad-editar.component';
import { LocalidadesComponent } from './localidades/localidades.component';

const routes: Routes = [
  {
    path: '',
    component: LocalidadesComponent
  },
  {
    path: 'editar/:id',
    component: LocalidadEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalidadesRoutingModule { }
