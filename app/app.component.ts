import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracking App</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  </div>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
   new Animal('Arctic Fox', 'Moon', 2, "carnivore", "Northern Trail", 5, 'female', 'Cool shade', 'Loud noises'),
   new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
   new Animal('Northwest Black Tailed Deer', "Tinkerbell", 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
 ];


}
