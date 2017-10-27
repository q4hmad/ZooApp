import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals" selected="selected">Mature Animals</option>
    </select>
    <ul>
      <li  (click)="maturity(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">Species: {{currentAnimal.species}}
      <ul>
        <li>Name: {{currentAnimal.name}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers required: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
        <button class="btn btn-info" (click)="editButtonHasBeenClicked(currentAnimal.isMature())">Edit!</button>
        
      </ul>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  filterByMaturity: string = "notMature";


  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }







}
