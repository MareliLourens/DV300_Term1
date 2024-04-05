import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory_One } from '../models/inventory-one.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryOneService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/inventory"
 
  //get all the inventory items
  getAllInventory(): Observable<Inventory_One[]>{
    return this.http.get<Inventory_One[]>(this.baseUrl)
  }

  //gupdate inventory amount
  updateInventoryAmmount(id: number, newAmount: number): Observable<Inventory_One> {
    return this.http.put<Inventory_One>(`${this.baseUrl}/${id}`, {amount: newAmount})
  }
}
