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
export class InventoryStockComponentSA {
  constructor(private service: InventoryOneService){}

  inventory: Inventory_One[] = [
    {
      id: 0,
      name: "HTML",
      image: "assets/assests/BE (Deluxe Edition)/CD.png",
      amount_avaible: 0,
      main_category: "Album BE",
    },
  ] 

  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventory = data
    })
  }

  tempUpdatedvalue = 0

  //SET ACTIVE INVENTORY
  selectedInventory?: Inventory_One;

  setSelectedItem(inventory: Inventory_One) {
    this.selectedInventory = inventory;

    console.log(this.selectedInventory);

  }

  // getting the updated amout that we want
  updateAmount(e:any) {
    this.tempUpdatedvalue = parseInt(e.target.value)
  }

  saveAmount() {
    //save changes to db
    this.service.updateInventoryAmmount(this.selectedInventory!.id!, this.tempUpdatedvalue!)
    .subscribe((newitem) => {
      //update amount
      this.selectedInventory!.amount_avaible = newitem.amount_avaible
    })

  }


}
