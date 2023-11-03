import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { FichaUnoComponent } from './pages/ficha-uno/ficha-uno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndicacionesGeneralesComponent } from './componentes/indicaciones-generales/indicaciones-generales.component';
import { EscalaRiesgoComponent } from './componentes/escala-riesgo/escala-riesgo.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DashBoardComponent,
    FormulariosComponent,
    FichaUnoComponent,
    IndicacionesGeneralesComponent,
    EscalaRiesgoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    DatePipe
  ]
})
export class AdminModule { }
