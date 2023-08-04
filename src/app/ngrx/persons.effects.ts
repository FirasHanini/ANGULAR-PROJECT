import {Injectable} from "@angular/core";
import {PersonService} from "../Service/person.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  AddPersonAction, AddPersonActionError, AddPersonActionSuccess,
  AddPersonModuleActionSuccess,
  DeletePersonActionError, DeletePersonsActionSuccess,
  GetAllPersonsActionError,
  GetAllPersonsActionSuccess,
  PersonActions,
  PersonsActionsType
} from "./persons.actions";

@Injectable()
export class PersonsEffect{

  constructor(private personService:PersonService,private effectActions:Actions) {
  }


              //GET ALL//
  getAllPersonsEffect:Observable<Action>= createEffect(
    ()=>this.effectActions.pipe(
      ofType(PersonsActionsType.GET_ALL_PERSON),
      mergeMap((action)=>{
        return this.personService.getPersons()
          .pipe(map((persons)=>new GetAllPersonsActionSuccess(persons)),
          catchError((error)=>of(new GetAllPersonsActionError(error.message()))))
})
    )
  )


  //GET ALL//
  deletePersonEffect:Observable<Action>= createEffect(
    ()=>this.effectActions.pipe(
      ofType(PersonsActionsType.DELETE_PERSON),
      mergeMap((action:PersonActions)=>{
        return this.personService.deletePerson(action.payload.id)
          .pipe(map(()=>new DeletePersonsActionSuccess(action.payload)),
            catchError((error)=>of(new DeletePersonActionError(error.message()))))
      })
    )
  )



    //NewPersonModule//

  addPersonModuleEffect:Observable<PersonActions>= createEffect(
    ()=>this.effectActions.pipe(
      ofType(PersonsActionsType.ADD_PERSON_MODULE),
      map((action:PersonActions)=> {
        return new AddPersonModuleActionSuccess({});
      })

    )
  )



                    //addPerson//
  addPersonEffect:Observable<Action>= createEffect(
    ()=>this.effectActions.pipe(
      ofType(PersonsActionsType.ADD_PERSON),
      mergeMap((action:PersonActions)=>{
        return this.personService.addPerson(action.payload)
          .pipe(map((person)=>new AddPersonActionSuccess(person)),
            catchError((error)=>of(new AddPersonActionError(error.message()))))
      })
    )
  )





}
