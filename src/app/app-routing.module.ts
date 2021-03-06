import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('src/app/pedidos/pedidos.module').then(m => m.PedidosModule)
  },
  {
    path: 'localidades',
    loadChildren: () => import('src/app/localidades/localidades.module').then(m => m.LocalidadesModule)
  },
  {
    path: 'propietarios',
    loadChildren: () => import('src/app/propietarios/propietarios.module').then(m => m.PropietariosModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
