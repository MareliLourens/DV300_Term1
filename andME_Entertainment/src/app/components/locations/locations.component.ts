import { Component, Input } from '@angular/core';
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

  ngOnInit(){
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventory = data
    })
  }

  
}
