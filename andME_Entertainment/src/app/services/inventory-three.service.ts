import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory_Three } from '../models/inventory-three.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryThreeService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:3000/inventorythree"
     
  //get all the inventory items
  getAllInventoryThree(): Observable<Inventory_Three[]>{
    return this.http.get<Inventory_Three[]>(this.baseUrl)
  }
    
  //gupdate inventory amount
  updateInventoryAmmountThree(id: number, newAmount: number): Observable<Inventory_Three> {
    return this.http.put<Inventory_Three>(`${this.baseUrl}/${id}`, {amount: newAmount})
  }
}
