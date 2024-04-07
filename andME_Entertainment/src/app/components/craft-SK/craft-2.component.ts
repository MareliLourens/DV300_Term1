import { Component } from '@angular/core';
import { Craftable } from '../../models/craftable.model';
import { CraftableTwoService } from '../../services/craftable-two.service';

@Component({
  selector: 'app-craft',
  standalone: true,
  imports: [],
  templateUrl: './craft-2.component.html',
  styleUrl: './craft-2.component.css'
})
export class CraftComponentSK {

  constructor (private service: CraftableTwoService) {}

  craftabletwo: Craftable[] = []

  ngOnInit() {
    this.getCraftablesTwo();
  }

  getCraftablesTwo() {
    this.service.getAllCraftablesTwo().subscribe((data) => {
      console.log(data);
      this.craftabletwo = data;
    });
  }

  //SET ACTIVE RECIPE
  selectedCraftableTwo?: Craftable;

  setSelectedRicipeTwo(craftabletwo: Craftable) {
    this.selectedCraftableTwo = craftabletwo;

    this.checkCraftabilityTwo();
  }

  checkCraftabilityTwo() {
    //by default, we asume we have enough ingredients
    this.selectedCraftableTwo!.isCraftable = true;

    //Loop  through our ingredients to check if we have enough
    this.selectedCraftableTwo!.ingredientstwo?.forEach((ingredienttwo) => {
      //if any of the ingredients is not enough, set craftable to false
      if (ingredienttwo.amount > ingredienttwo.inventorytwo.amount_avaible) {
        this.selectedCraftableTwo!.isCraftable = false;
        console.log('not craftable ' + ingredienttwo.inventorytwo.name);
        return; //stop whenever any of the ingredients is not enough
      }
    });
  }

  craftNewRecipeTwo(craftabletwo: Craftable) {
    if (this.selectedCraftableTwo!.id == craftabletwo.id) { //making sure the right id has been selected
      this.service.craftCraftableTwo(craftabletwo).subscribe((data) => {
        this.selectedCraftableTwo! = data;
      })
    }
  }

}
