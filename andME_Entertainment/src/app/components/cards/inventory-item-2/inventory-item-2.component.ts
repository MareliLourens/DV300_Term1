import { Component, Input } from '@angular/core';
import { InventoryTwoService } from '../../../services/inventory-two.service';
import { Inventory_Two } from '../../../models/inventory-two.model';

@Component({
  selector: 'app-inventory-item-2',
  standalone: true,
  imports: [],
  templateUrl: './inventory-item-2.component.html',
  styleUrl: './inventory-item-2.component.css'
})
export class InventoryItem2Component {
  
  constructor(private service: InventoryTwoService) {}

  //Behaviour and variables
  @Input() item2: Inventory_Two = 
    {
      id: 0,
      name: "BE",
      image: "assets/assests/BE (Deluxe Edition)/Outer_Box.png",
      amount_avaible: 0,
      main_category: "Album BE",
  }
}
