import { Person } from './person';

export class Player implements Person {
  constructor(public name: string) {}
  formatName() {
    return this.name.toUpperCase();
  }
}
