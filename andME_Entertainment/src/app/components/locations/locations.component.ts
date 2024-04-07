import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { InventoryOneService } from '../../services/inventory-one.service';
import { Inventory_One } from '../../models/inventory-one.model';


@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

  constructor(private service: InventoryOneService) {}

  
  inventory: Inventory_One[] = [
    {
      id: 0,
      name: "HTML",
      image: "assets/assests/BE (Deluxe Edition)/CD.png",
      amount_avaible: 0,
      main_category: "Album BE",
    },
  ] 

  sum = 0

  number = this.inventory.forEach(a => this.sum += a.amount_avaible);
  
  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventory = data
    })
  }

  // totalNumber = 0

  // selectedInventory?: Inventory_One;

  // setSelectedItem(inventory: Inventory_One) {

  //   this.totalNumber = this.selectedInventory!.amount_avaible

  //   console.log(this.totalNumber)

  // }

  

  
  


}
