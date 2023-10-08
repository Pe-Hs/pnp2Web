import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { NotFoundPageComponent } from 'src/app/shared/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashBoardComponent},
      { path: '**', component: NotFoundPageComponent},
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }