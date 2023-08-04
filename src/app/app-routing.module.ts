import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AppComponent} from "./app.component";
import {AddPersonComponent} from "./add-person/add-person.component";
import {PersonsComponent} from "./persons/persons.component";

const routes: Routes = [
  {path:"persons",component:PersonsComponent},
  {path:"addPerson",component:AddPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
