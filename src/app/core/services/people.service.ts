import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Resolve<Array<Person>>{

  constructor(
    private http: HttpClient
  ) { }


  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Person>> {
    return this.http.get<Array<Person>>("./assets/json/people.json");
  }
}
