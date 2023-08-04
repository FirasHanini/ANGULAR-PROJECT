import {Action} from "@ngrx/store";
import {Person} from "../person/Person";

export enum PersonsActionsType{

                      /*get All*/
  GET_ALL_PERSON="[Persons] Get All",
  GET_ALL_PERSON_SUCCESS="[Persons] Get All Success",
  GET_ALL_PERSON_ERROR="[Persons] Get All Error",

                        /*Delete*/
  DELETE_PERSON="[Person] Delete Person",
  DELETE_PERSON_SUCCESS="[Person] Delete Person Success",
  DELETE_PERSON_ERROR="[Person] Delete Person Error",

                    /*add Person Module*/

  ADD_PERSON_MODULE="[Person] Add Person Module",
  ADD_PERSON_MODULE_SUCCESS="[Person] Add Person Module Success",
  ADD_PERSON_MODULE_ERROR="[Person] Add Person Module Error",


              /*add person */
  ADD_PERSON="[Person] Add Person ",
  ADD_PERSON_SUCCESS="[Person] Add Person  Success",
  ADD_PERSON_ERROR="[Person] Add Person Error",

}

export class GetAllPersonsAction implements Action{
  type:PersonsActionsType= PersonsActionsType.GET_ALL_PERSON;

  constructor(public payload:any) {
  }


}

export class GetAllPersonsActionSuccess implements Action{
  type:PersonsActionsType= PersonsActionsType.GET_ALL_PERSON_SUCCESS;

  constructor(public payload:Person[]) {
  }


}

export class GetAllPersonsActionError implements Action{
  type:PersonsActionsType= PersonsActionsType.GET_ALL_PERSON_ERROR;

  constructor(public payload:string) {
  }


}












///DELETE//////////

export class DeletePersonsAction implements Action{
  type:PersonsActionsType= PersonsActionsType.DELETE_PERSON;

  constructor(public payload:any) {
  }


}

export class DeletePersonsActionSuccess implements Action{
  type:PersonsActionsType= PersonsActionsType.DELETE_PERSON_SUCCESS;

  constructor(public payload:Person) {
  }


}

export class DeletePersonActionError implements Action{
  type:PersonsActionsType= PersonsActionsType.DELETE_PERSON_ERROR;

  constructor(public payload:string) {
  }


}



  //AddPersonModule//

export class AddPersonModuleAction implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON_MODULE;

  constructor(public payload:any) {
  }


}

export class AddPersonModuleActionSuccess implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON_MODULE_SUCCESS;

  constructor(public payload:any) {
  }


}

export class AddPersonModuleActionError implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON_MODULE_ERROR;

  constructor(public payload:string) {
  }


}






        //AddPerson//

export class AddPersonAction implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON;

  constructor(public payload:Person) {
  }


}

export class AddPersonActionSuccess implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON_SUCCESS;

  constructor(public payload:Person) {
  }


}

export class AddPersonActionError implements Action{
  type:PersonsActionsType= PersonsActionsType.ADD_PERSON_ERROR;

  constructor(public payload:string) {
  }


}


export type PersonActions =
  GetAllPersonsAction | GetAllPersonsActionSuccess | GetAllPersonsActionError
  |DeletePersonsAction| DeletePersonsActionSuccess |DeletePersonActionError
  |AddPersonModuleAction | AddPersonModuleActionSuccess | AddPersonModuleActionError
  |AddPersonAction | AddPersonActionSuccess | AddPersonActionError;

