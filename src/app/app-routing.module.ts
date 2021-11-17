import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'sist',
    loadChildren: () => import('./modules/pages/sist/sistema.module').then(m => m.SistemaModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
