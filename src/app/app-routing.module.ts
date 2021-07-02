import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./components/add/add.component";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";


const routes: Routes = [
  { path: 'add', component: AddComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '**', redirectTo: 'list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

