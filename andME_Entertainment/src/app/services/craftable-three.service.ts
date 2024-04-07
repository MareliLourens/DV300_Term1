import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Craftable } from '../models/craftable.model';

@Injectable({
  providedIn: 'root'
})
export class CraftableThreeService {

  constructor (private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/craftablesthree"

  getAllCraftablesThree(): Observable<Craftable[]> {
    return this.http.get<Craftable[]>(this.baseUrl)
  }

  //Call the craft Functionality
  craftCraftableThree(craftablethree: Craftable): Observable<Craftable> {
    var craftUrl = this.baseUrl + "/" + craftablethree.id + "/craft"
    return this.http.put<Craftable>(craftUrl, {amount: craftablethree!.amount_crafted+1, ingredients: craftablethree.ingredientsthree})
  }
  
}
