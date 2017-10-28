import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Add a New Animal</h1>
  <div>
  <label>Enter Animal Species:</label>
  <input #newSpecies>
  <label>Enter Animal Name:</label>
  <input #newName>
  <label>Enter Animal Age:</label>
  <input #newAge>
  <label>Enter Animal Diet:</label>
  <input #newDiet>
  <label>Enter Animal Location:</label>
  <input #newLocation>
  <label>Enter Animal Caretakers:</label>
  <input #newCaretakers>
  <label>Enter Animal Sex:</label>
  <input #newSex>
  <label>Enter Animal Likes:</label>
  <input #newLikes>
  <label>Enter Animal Dislikes:</label>
  <input #newDislikes>
  <button class="btn btn-info"(click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add New Animal</button>
 </div>
 `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
