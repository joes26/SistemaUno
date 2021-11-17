import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../shared/layout/default/default.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  },
  
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
