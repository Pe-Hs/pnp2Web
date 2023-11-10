import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { FichaUnoComponent } from './pages/ficha-uno/ficha-uno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndicacionesGeneralesComponent } from './componentes/indicaciones-generales/indicaciones-generales.component';
import { EscalaRiesgoComponent } from './componentes/escala-riesgo/escala-riesgo.component';
import es from '@angular/common/locales/es';
import { VerificacionFichaComponent } from './componentes/verificacion-ficha/verificacion-ficha.component';
import { ArchivosComponent } from './pages/archivos/archivos.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    DashBoardComponent,
    FormulariosComponent,
    FichaUnoComponent,
    IndicacionesGeneralesComponent,
    EscalaRiesgoComponent,
    VerificacionFichaComponent,
    ArchivosComponent
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
    DatePipe,
    {provide: LOCALE_ID, useValue: 'es-PE'}
  ]
})
export class AdminModule { }
