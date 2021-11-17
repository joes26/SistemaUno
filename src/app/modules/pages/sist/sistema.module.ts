import { NgModule } from '@angular/core';
import { SistemaRoutingModule } from './sistema.route';
import { SharedModule } from '../shared/shared.module';
//import { NgWherePipeModule  } from 'angular-pipes';
@NgModule({
  declarations: [],
  imports: [
    SistemaRoutingModule,
    SharedModule, 
  ]
})
export class SistemaModule { }
