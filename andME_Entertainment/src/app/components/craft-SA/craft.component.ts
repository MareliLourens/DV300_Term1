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
export class CraftComponentSA {

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

    this.checkCraftability();
  }

  checkCraftability() {
    //by default, we asume we have enough ingredients
    this.selectedCraftable!.isCraftable = true;

    //Loop  through our ingredients to check if we have enough
    this.selectedCraftable!.ingredients?.forEach((ingredient) => {
      //if any of the ingredients is not enough, set craftable to false
      if (ingredient.amount > ingredient.inventory.amount_avaible) {
        this.selectedCraftable!.isCraftable = false;
        console.log('not craftable ' + ingredient.inventory.name);
        return; //stop whenever any of the ingredients is not enough
      }
    });
  }

  craftNewRecipe(craftable: Craftable) {
    if (this.selectedCraftable!.id == craftable.id) { //making sure the right id has been selected
      this.service.craftCraftable(craftable).subscribe((data) => {
        this.selectedCraftable! = data;
      })
    }
  }

}
