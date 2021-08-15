import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements Resolve<Array<Item>> {

  constructor(private http: HttpClient) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Item>> {
    return this.http.get<Array<Item>>("./assets/json/items.json");
  }
}
