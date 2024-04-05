import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { InventoryItem2Component } from '../cards/inventory-item-2/inventory-item-2.component';
import { InventoryTwoService } from '../../services/inventory-two.service';
import { Inventory_Two } from '../../models/inventory-two.model';


@Component({
  selector: 'app-inventory-stock',
  standalone: true,
  imports: [CommonModule, MatCardModule, InventoryItem2Component],
  templateUrl: './inventory-stock-2.component.html',
  styleUrl: './inventory-stock-2.component.css'
})
export class InventoryStockComponentSK {

  constructor(private service: InventoryTwoService){}

  inventory2: Inventory_Two[] = [
    {
      id: 0,
      name: "HTML",
      image: "assets/assests/BE (Deluxe Edition)/CD.png",
      amount_avaible: 0, 
      main_category: "Album BE",
    },
  ] 

  ngOnInit(){
    this.service. getAllInventoryTwo().subscribe((data) => {
      console.log(data);
      this.inventory2 = data
    })
  }

  tempUpdatedvalue = 0

  //SET ACTIVE INVENTORY
  selectedInventory2?: Inventory_Two;

  setSelectedItemTwo(inventory2: Inventory_Two) {
    this. selectedInventory2 = inventory2;

    console.log(this. selectedInventory2);

  }

  // getting the updated amout that we want
  updateAmount2(e:any) {
    this.tempUpdatedvalue = parseInt(e.target.value)
  }

  saveAmount2() {
    //save changes to db
    this.service.updateInventoryAmmountTwo(this. selectedInventory2!.id!, this.tempUpdatedvalue!)
    .subscribe((newitem) => {
      //update amount
      this. selectedInventory2!.amount_avaible = newitem.amount_avaible
    })

  }


}
