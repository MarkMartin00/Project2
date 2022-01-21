import { CharClass } from './../../interface/char-class';
import { PlayerCharacter } from './../../models/player-character';
import { SheetService } from './../../services/sheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
})
export class SheetComponent implements OnInit {
  title = 'Character Sheet';

  public character: PlayerCharacter = new Character(
    'Lisa Lisa',
    'Human',
    'Monk',
    ['str', 'wis', 'int'],
    2
  );

  constructor(private service: SheetService) { }

  ngOnInit(): void {
    this.getClass(this.character.char_class);
  }


  private getClass(index: string) {
    this.service.getClass(this.character.char_class).subscribe(
      (data => this.char_class = data)
    );
  }
}
