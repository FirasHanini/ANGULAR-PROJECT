import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";

import { AddPersonComponent } from './add-person/add-person.component';
import {HttpClientModule} from "@angular/common/http";
import {PersonsComponent} from "./persons/persons.component";
import {FormsModule} from "@angular/forms";
import { UpdatePersonComponent } from './update-person/update-person.component';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PersonsReducer} from "./ngrx/persons.reducers";
import {PersonsEffect} from "./ngrx/persons.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    NavBarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,

    StoreModule.forRoot({personsState:PersonsReducer}),
    EffectsModule.forRoot([PersonsEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
