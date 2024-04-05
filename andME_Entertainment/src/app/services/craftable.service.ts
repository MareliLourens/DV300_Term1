import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Craftable } from '../models/craftable.model';

@Injectable({
  providedIn: 'root'
})
export class CraftableService {

  constructor (private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/craftables"

  getAllCraftables(): Observable<Craftable[]> {
    return this.http.get<Craftable[]>(this.baseUrl)
  }

  //Call the craft Functionality
  craftCraftable(craftable: Craftable): Observable<Craftable> {
    var craftUrl = this.baseUrl + "/" + craftable.id + "/craft"
    return this.http.put<Craftable>(craftUrl, {amount: craftable!.amount_crafted+1, ingredients: craftable.ingredients})
  }


}
