import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllPersonsAction} from "./ngrx/persons.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personApp';
  constructor(private store:Store) {
  }


  onShowPerson() {

  }
}
