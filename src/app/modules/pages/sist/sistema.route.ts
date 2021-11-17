import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../shared/layout/default/default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      /*{
        path: 'recepcion',
        loadChildren: () => import('./recepcion/recepcion.module').then(m => m.RecepcionModule)
      },
      {
        path: 'taller',
        loadChildren: () => import('./taller/taller.module').then(m => m.TallerModule)
      },
      {
        path: 'seguimiento',
        loadChildren: () => import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule)
      },
      {
        path: 'actualizar-ubicacion',
        loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionModule)
      },
      {
        path: 'operacion-masiva',
        loadChildren: () => import('./operacion-masiva/operacion-masiva.module').then(m => m.OperacionMasivaModule)
      }*/
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
