export class Animal {
  public mature: boolean = false;
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }

  isMature() {
    if(this.age >=2) {
      this.mature = true;
    }
  }
}
