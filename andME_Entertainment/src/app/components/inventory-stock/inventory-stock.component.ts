import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { InventoryOneService } from '../../services/inventory-one.service';
import { Inventory_One } from '../../models/inventory-one.model';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inventory-stock',
  standalone: true,
  imports: [CommonModule, MatCardModule, InventoryItemComponent],
  templateUrl: './inventory-stock.component.html',
  styleUrl: './inventory-stock.component.css'
})
export class InventoryStockComponent {
  constructor(private service: InventoryOneService){}

  inventoryList: Inventory_One[] = [
    {
      id: 1,
      name: "HTML",
      image: "assets/assests/BE (Deluxe Edition)\CD.png",
      amount_avaible: 4
    }
  ] 

  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventoryList = data
    })
  }
}
