import { Component, Input } from '@angular/core';
import { InventoryOneService } from '../../../services/inventory-one.service';
import { Inventory_One } from '../../../models/inventory-one.model';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {

  constructor(private service: InventoryOneService) {}

  //Behaviour and variables
  @Input() item: Inventory_One = 
    {
      id: 0,
      name: "BE",
      image: "assets/assests/BE (Deluxe Edition)/Outer_Box.png",
      amount_avaible: 0,
      main_category: "Album BE",
  }
}
