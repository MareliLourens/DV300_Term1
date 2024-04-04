import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryOne } from '../models/inventory-one.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryOneService {

   // add httpClient functionality to this service
   constructor(private http: HttpClient) {}

   private baseUrl = "http://localhost:3000/inventory"
 
   //get all the inventory items
   getAllInventory(): Observable<InventoryOne[]>{
     return this.http.get<InventoryOne[]>(this.baseUrl)
   }

}
