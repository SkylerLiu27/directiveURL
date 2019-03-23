import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InputComponent },
  { path: ':id', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
