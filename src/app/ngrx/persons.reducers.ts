import {Person} from "../person/Person";
import {PersonActions, PersonsActionsType} from "./persons.actions";
import {Action} from "@ngrx/store";


export enum PersonStateEnum {
  LOADING="Laoding",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="New"
}

export interface PersonsState {
  persons:Person[];
  errorMessage:string;
  dataState:PersonStateEnum

}

const initState: PersonsState={
  persons:[],
  errorMessage:"",
  dataState:PersonStateEnum.INITIAL
}

export function PersonsReducer(state:PersonsState=initState,action:Action):PersonsState {
  switch(action.type){
    case PersonsActionsType.GET_ALL_PERSON:
      return {...state,dataState:PersonStateEnum.LOADING}

    case PersonsActionsType.GET_ALL_PERSON_SUCCESS:
      return {...state,dataState:PersonStateEnum.LOADED, persons:(<PersonActions>action).payload }

    case PersonsActionsType.GET_ALL_PERSON_ERROR:
      return {...state,dataState:PersonStateEnum.ERROR,errorMessage:(<PersonActions>action).payload}

                  //DELETE//
    case PersonsActionsType.DELETE_PERSON:
      return {...state,dataState:PersonStateEnum.LOADING}

    case PersonsActionsType.DELETE_PERSON_SUCCESS:
      let person:Person=(<PersonActions>action).payload
      let index=state.persons.indexOf(person)
      let personList=[...state.persons];
       personList.splice(index,1);
      return {...state,dataState:PersonStateEnum.LOADED, persons:personList }

    case PersonsActionsType.DELETE_PERSON_ERROR:
      return {...state,dataState:PersonStateEnum.ERROR,errorMessage:(<PersonActions>action).payload}

        //AddPersonModule//
    case PersonsActionsType.ADD_PERSON_MODULE:
      return {...state,dataState:PersonStateEnum.LOADING}

    case PersonsActionsType.ADD_PERSON_MODULE_SUCCESS:
      return{...state,dataState:PersonStateEnum.LOADED}
    case PersonsActionsType.ADD_PERSON_MODULE_ERROR:
      return {...state,dataState:PersonStateEnum.ERROR,errorMessage:(<PersonActions>action).payload}

          //AddPerson//
    case PersonsActionsType.ADD_PERSON:
      return {...state,dataState:PersonStateEnum.LOADING}
    case  PersonsActionsType.ADD_PERSON_SUCCESS:
      let personsTemp=[...state.persons];
      personsTemp.push((<PersonActions>action).payload)
      return {...state,dataState:PersonStateEnum.LOADED,persons:personsTemp}
    case PersonsActionsType.ADD_PERSON_ERROR:
      return {...state,dataState:PersonStateEnum.ERROR,errorMessage:(<PersonActions>action).payload}



    default: return {...state}
  }


}
