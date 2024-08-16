import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { InventoryOneService } from '../../services/inventory-one.service';
import { Inventory_One } from '../../models/inventory-one.model';
import { CraftableService } from '../../services/craftable.service';
import { Craftable } from '../../models/craftable.model';
import { Inventory_Two } from '../../models/inventory-two.model';
import { InventoryTwoService } from '../../services/inventory-two.service';
import { Inventory_Three } from '../../models/inventory-three.model';
import { InventoryThreeService } from '../../services/inventory-three.service';
import { CraftableTwoService } from '../../services/craftable-two.service';
import { CraftableThreeService } from '../../services/craftable-three.service';


@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

  constructor (
    private service: InventoryOneService, 
    private servicetwo: InventoryTwoService, 
    private servicethree: InventoryThreeService,
    private servicefour: CraftableService,
    private servicefive: CraftableTwoService,
    private servicesix: CraftableThreeService,
  ) {}

  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventory1 = data
    });
    this.servicetwo.getAllInventoryTwo().subscribe((data) => {
      console.log("...")
      console.log(data);
      this.inventory2 = data
    });
    this.servicethree.getAllInventoryThree().subscribe((data) => {
      console.log(data);
      this.inventory3 = data
    });
    this.servicefour.getAllCraftables().subscribe((data) => {
      console.log(data);
      this.craftable1 = data
    });
    this.servicefive.getAllCraftablesTwo().subscribe((data) => {
      console.log(data);
      this.craftable2 = data
    });
    this.servicesix.getAllCraftablesThree().subscribe((data) => {
      console.log(data);
      this.craftable3 = data
    });
  }

  // Code to try and sum all data for inventory one
  inventory1: Inventory_One[] = [

  ]

  craftable1: Craftable[] = [

  ]

  get rows(): number {
    return this.inventory1.length;
  }

  get rowscraft(): number {
    return this.craftable1.length;
  }

  get max(){
    return Math.max(...this.inventory1.map(item => item.amount_avaible));
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

  // Code to try and sum all data for inventory two
  inventory2: Inventory_Two[] = [

  ]

  craftable2: Craftable[] = [

  ]

  get rowstwo(): number {
    return this.inventory2.length;
  }

  get rowscrafttwo(): number {
    return this.craftable2.length;
  }

  get maxtwo(){
    return Math.max(...this.inventory2.map(item => item.amount_avaible));
  }

  // Code to try and sum all data for inventory three
  inventory3: Inventory_Three[] = [

  ]

  craftable3: Craftable[] = [

  ]

  get rowsthree(): number {
    return this.inventory3.length;
  }

  get rowscraftthree(): number {
    return this.craftable3.length;
  }

  get maxthree(){
    return Math.max(...this.inventory3.map(item => item.amount_avaible));
  }


}
