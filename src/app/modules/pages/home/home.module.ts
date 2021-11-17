import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DefaultComponent } from '../shared/layout/default/default.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
