import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietariosComponent } from './propietarios.component';
import { PropietariosModule } from './propietarios.module';

const routes: Routes = [
  {
    path: 'propietario/:id',
    component: PropietariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }
