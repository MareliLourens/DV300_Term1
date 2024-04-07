import { Component } from '@angular/core';
import { Craftable } from '../../models/craftable.model';
import { CraftableThreeService } from '../../services/craftable-three.service';

@Component({
  selector: 'app-craft',
  standalone: true,
  imports: [],
  templateUrl: './craft-3.component.html',
  styleUrl: './craft-3.component.css'
})
export class CraftComponentJP {

  constructor (private service: CraftableThreeService) {}

  craftablethree: Craftable[] = []

  ngOnInit() {
    this.getCraftablesThree();
  }

  getCraftablesThree() {
    this.service.getAllCraftablesThree().subscribe((data) => {
      console.log(data);
      this.craftablethree = data;
    });
  }

  //SET ACTIVE RECIPE
  selectedCraftableThree?: Craftable;

  setSelectedRicipeThree(craftablethree: Craftable) {
    this.selectedCraftableThree = craftablethree;

    this.checkCraftabilityThree();
  }

  checkCraftabilityThree() {
    //by default, we asume we have enough ingredients
    this.selectedCraftableThree!.isCraftable = true;

    //Loop  through our ingredients to check if we have enough
    this.selectedCraftableThree!.ingredientsthree?.forEach((ingredient) => {
      //if any of the ingredients is not enough, set craftable to false
      if (ingredient.amount > ingredient.inventorythree.amount_avaible) {
        this.selectedCraftableThree!.isCraftable = false;
        console.log('not craftable ' + ingredient.inventorythree.name);
        return; //stop whenever any of the ingredients is not enough
      }
    });
  }

  craftNewRecipeThree(craftablethree: Craftable) {
    if (this.selectedCraftableThree!.id == craftablethree.id) { //making sure the right id has been selected
      this.service.craftCraftableThree(craftablethree).subscribe((data) => {
        this.selectedCraftableThree! = data;
      })
    }
  }

}
