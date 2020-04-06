import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarksViewComponent} from './pages/marks-view/marks-view.component';
import {MarksEditComponent} from './pages/marks-edit/marks-edit.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view', component: MarksViewComponent},
  {path: 'edit', component: MarksEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
