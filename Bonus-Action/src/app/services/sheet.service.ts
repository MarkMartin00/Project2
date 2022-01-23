import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SheetService {

  // DICE ROLLS
  public d4() {
    var d4 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return d4;
  }
  public d6() {
  var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return d6;
  }
  public d8() {
    var d8 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    return d8;
  }
  public d10 () {
    var d10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return d10;
  }
  public d12 () {
    var d12 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    return d12;
  }
  public d20 () {
    var d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    return d20;
  }
}


