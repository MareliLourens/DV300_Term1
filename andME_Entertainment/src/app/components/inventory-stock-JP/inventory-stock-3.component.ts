import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { InventoryThreeService } from '../../services/inventory-three.service';
import { Inventory_Three } from '../../models/inventory-three.model';
import { InventoryItem3Component } from '../cards/inventory-item-3/inventory-item-3.component';


@Component({
  selector: 'app-inventory-stock',
  standalone: true,
  imports: [CommonModule, MatCardModule, InventoryItem3Component],
  templateUrl: './inventory-stock-3.component.html',
  styleUrl: './inventory-stock-3.component.css'
})
export class InventoryStockComponentJP{
  constructor(private service: InventoryThreeService){}

  inventory3: Inventory_Three[] = [
    {
      id: 0,
      name: "HTML",
      image: "assets/assests/BE (Deluxe Edition)/CD.png",
      amount_avaible: 0,
      main_category: "Album BE",
    },
  ] 

  ngOnInit(){
    this.service.getAllInventoryThree().subscribe((data) => {
      console.log(data);
      this.inventory3 = data
    })
  }

  tempUpdatedvalue = 0

  //SET ACTIVE INVENTORY
  selectedInventory3?: Inventory_Three;

  setSelectedItemThree(inventory3: Inventory_Three) {
    this.selectedInventory3 = inventory3;

    console.log(this.selectedInventory3);

  }

  // getting the updated amout that we want
  updateAmount3(e:any) {
    this.tempUpdatedvalue = parseInt(e.target.value)
  }

  saveAmount3() {
    //save changes to db
    this.service.updateInventoryAmmountThree(this.selectedInventory3!.id!, this.tempUpdatedvalue!)
    .subscribe((newitem) => {
      //update amount
      this.selectedInventory3!.amount_avaible = newitem.amount_avaible
    })

  }


}
