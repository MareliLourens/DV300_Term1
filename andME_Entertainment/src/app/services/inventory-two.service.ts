import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory_Two } from '../models/inventory-two.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryTwoService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/inventorytwo"
   
  //get all the inventory items
  getAllInventoryTwo(): Observable<Inventory_Two[]>{
    return this.http.get<Inventory_Two[]>(this.baseUrl)
  }
  
  //gupdate inventory amount
  updateInventoryAmmountTwo(id: number, newAmount: number): Observable<Inventory_Two> {
    return this.http.put<Inventory_Two>(`${this.baseUrl}/${id}`, {amount: newAmount})
  }
}
