import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Craftable } from '../models/craftable.model';

@Injectable({
  providedIn: 'root'
})
export class CraftableTwoService {

  constructor (private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/craftablestwo"

  getAllCraftablesTwo(): Observable<Craftable[]> {
    return this.http.get<Craftable[]>(this.baseUrl)
  }

  //Call the craft Functionality
  craftCraftableTwo(craftabletwo: Craftable): Observable<Craftable> {
    var craftUrl = this.baseUrl + "/" + craftabletwo.id + "/craft"
    return this.http.put<Craftable>(craftUrl, {amount: craftabletwo!.amount_crafted+1, ingredients: craftabletwo.ingredientstwo})
  }
}
