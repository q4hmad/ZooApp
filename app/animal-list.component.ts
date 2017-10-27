import { Component } from '@angular/core';
import { Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="completedAnimals">Completed Animals</option>
      <option value="incompleteAnimals" selected="selected">Incomplete Animals</option>
    </select>
    <ul>
      <li  (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness">{{currentAnimal.description}} {{currentAnimal.priority}}
        <input *ngIf="currentAnimal.done === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.done === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
    </ul>


  <ul>
    <li [class]="priorityColor(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {


}
