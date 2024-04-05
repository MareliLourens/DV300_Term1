import { Component, Input } from '@angular/core';
import { InventoryThreeService } from '../../../services/inventory-three.service';
import { Inventory_Three } from '../../../models/inventory-three.model';

@Component({
  selector: 'app-inventory-item-3',
  standalone: true,
  imports: [],
  templateUrl: './inventory-item-3.component.html',
  styleUrl: './inventory-item-3.component.css'
})
export class InventoryItem3Component {

  constructor(private service: InventoryThreeService) {}

  //Behaviour and variables
  @Input() item3: Inventory_Three = 
    {
      id: 0,
      name: "BE",
      image: "assets/assests/BE (Deluxe Edition)/Outer_Box.png",
      amount_avaible: 0,
      main_category: "Album BE",
  }
}
