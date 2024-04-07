import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { InventoryOneService } from '../../services/inventory-one.service';
import { Inventory_One } from '../../models/inventory-one.model';
import { CraftableService } from '../../services/craftable.service';
import { Craftable } from '../../models/craftable.model';
import { Inventory_Two } from '../../models/inventory-two.model';


@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

  constructor (private service: InventoryOneService) {}

  inventory1: Inventory_One[] = [

  ]

  // Code to try and sum up the totals for each inventory
  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventory1 = data
    });
  }

  selectedInventory?: Inventory_One;

  get rows(): number {
    return this.inventory1.length;
  }

  // get rows2(): number {
  //   return this.inventory2.length;
  // }

  // Get max value of an item in inventory
  get max(){
    return Math.max(this.selectedInventory!.amount_avaible)
  }

  
  getItemsTotal(ItemArray: Inventory_One[]){
    let number = ItemArray
      .reduce(function (a, b) {
        return a + b.amount_avaible;
      }, 0);

      console.log(number)


    // this.selectedInventory = inventory;
    // console.log(this.selectedInventory)
  }


  // totalQuantity = 0
  // totalPrice = 0
  // sum = this.inventory1!.reduce((this.totalQuantity, this.inventory1!.amount_avaible) ; this.totalQuantity + this.selectedInventory!.amount_avaible)

  // getTotalItem() {
  //   // this.inventory1.reduce((acc, titem) => {
  //   // })
  //   this.item = this.totalQuantity += this.selectedInventory!.amount_avaible

  //   console.log(this.item)
    
  // }




}
