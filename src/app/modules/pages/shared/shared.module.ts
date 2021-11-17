import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { DefaultComponent } from './layout/default/default.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    AuthenticationComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [

  ]
})
export class SharedModule { }


/*
import { DatosRutaFlujoActividadComponent } from './components/datos-ruta-flujo-actividad/datos-ruta-flujo-actividad.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FilterPipe } from './pipe/filter.pipe';
import { NgWherePipeModule } from 'angular-pipes';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ScannerBarcodeComponent } from './components/scanner-barcode/scanner-barcode.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  declarations: [
    DatosRutaFlujoActividadComponent,
    FilterPipe,
    ScannerBarcodeComponent,
  ],
  imports: [
    NgDragDropModule.forRoot(),
    NgWherePipeModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    ZXingScannerModule
  ],
  exports: [
    DatosRutaFlujoActividadComponent,
    FilterPipe,
    ScannerBarcodeComponent
  ]
})
export class SharedModule { }

*/