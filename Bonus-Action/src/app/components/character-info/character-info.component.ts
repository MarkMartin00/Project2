import { LogLevel } from '@angular/compiler-cli/private/localize';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PlayerCharacter } from 'src/app/models/player-character';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
})
export class CharacterInfoComponent implements OnInit {
  pc_char: PlayerCharacter;
  pc_chars: PlayerCharacter[];
  classes: any[] = [];
  spells: any[] = [];
  features: any[] = [];
  backgrounds: any[] = [];
  race: any[] = [];
  equipment: any[] = [];
  feats: any[] = [];
  alignment: string[] = [
    'Lawful-Good',
    'Neutral-Good',
    'Chaotic-Good',
    'Lawful-Neutral',
    'True-Neutral',
    'Chaotic-Neutral',
    'Lawful-Evil',
    'Neutral-Evil',
    'Chaotic-Evil',
  ];
  char_name;
  char_class;
  char_level;
  char_race;
  char_bg;
  char_align;

  public registerCharacter() {
    let tempCharacter = new PlayerCharacter(
      this.char_name,
      this.char_race,
      this.char_class,
      ['dex', 'str'],
      this.char_level
    );
    this.pc_char = tempCharacter;
    console.log('Character Created!');
  }

  public saveCharacter() {
    this.pc_chars.push(this.pc_char);
    console.log(`${this.pc_char.char_name} saved!`);
  }

  public printCharacter() {
    console.log(this.pc_char);
  }

  public printName() {
    console.log(this.char_name);
  }

  characterExperience() {}
  onSaveEquipment() {}

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClasses().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getPlayerClass(result.index)
          .subscribe((response: any) => {
            this.classes.push(response);
          });
      });
    });
    this.dataService.getFeatures().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getSubFeatures(result.index)
          .subscribe((response: any) => {
            this.features.push(response);
          });
      });
    });
    this.dataService.getSpells().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getSpellIndex(result.index)
          .subscribe((response: any) => {
            this.spells.push(response);
          });
      });
    });
    this.dataService.getBackground().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getBackgroundIndex(result.index)
          .subscribe((response: any) => {
            this.backgrounds.push(response);
          });
      });
    });
    this.dataService.getEquipment().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getEquipmentIndex(result.index)
          .subscribe((response: any) => {
            this.equipment.push(response);
          });
      });
    });
    this.dataService.getRace().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getRaceIndex(result.index)
          .subscribe((response: any) => {
            this.race.push(response);
          });
      });
    });
    this.dataService.getFeats().subscribe((response: any) => {
      response.results.forEach((result) => {
        this.dataService
          .getFeatsIndex(result.index)
          .subscribe((response: any) => {
            this.feats.push(response);
          });
      });
    });
  }
}
