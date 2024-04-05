import { Component } from '@angular/core';
import { CraftableService } from '../../services/craftable.service';
import { Craftable } from '../../models/craftable.model';

@Component({
  selector: 'app-craft',
  standalone: true,
  imports: [],
  templateUrl: './craft.component.html',
  styleUrl: './craft.component.css'
})
export class CraftComponent {

  constructor (private service: CraftableService) {}

  craftable: Craftable[] = []

  ngOnInit() {
    this.getCraftables();
  }

  getCraftables() {
    this.service.getAllCraftables().subscribe((data) => {
      console.log(data);
      this.craftable = data;
    });
  }

  //SET ACTIVE RECIPE
  selectedCraftable?: Craftable;

  setSelectedRicipe(craftable: Craftable) {
    this.selectedCraftable = craftable;

  }

}
