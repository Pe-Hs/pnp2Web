import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { NotFoundPageComponent } from 'src/app/shared/not-found-page/not-found-page.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { FichaUnoComponent } from './pages/ficha-uno/ficha-uno.component';
import { ArchivosComponent } from './pages/archivos/archivos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard',   component: DashBoardComponent},
      { path: 'formularios', component: FormulariosComponent,
        children: [
          {path: 'ficha1', component: FichaUnoComponent, }
        ]
      },
      { path: 'ficha1',      component: FichaUnoComponent},
      { path: 'archivo',     component: ArchivosComponent},
      { path: '**',          component: NotFoundPageComponent},
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
