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

  constructor(private service: SheetService) { }

  ngOnInit(): void {

  }
}
