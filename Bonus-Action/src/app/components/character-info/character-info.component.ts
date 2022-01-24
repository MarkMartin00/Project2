import { LogLevel } from '@angular/compiler-cli/private/localize';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PlayerCharacter } from 'src/app/models/player-character';
import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})

export class CharacterInfoComponent implements OnInit {
  classes: any[] = [];
  spells: any[] = [];
  features: any[] = [];
  level: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  backgrounds: any[] = [];
  race: any[] = [];
  equipment: any[] = [];
  feats: any[] = [];
  alignment: string[] = ["Lawful-Good", "Neutral-Good","Chaotic-Good","Lawful-Neutral","True-Neutral",
                      "Chaotic-Neutral","Lawful-Evil","Neutral-Evil","Chaotic-Evil",]
  char_name: string;
  char_class: string;
  char_level: string;
  char_background: string;
  char_race: string;
  char_alignment: string;
  char_equipment: string;

  registerCharacter = (char_name, char_class, char_level, char_background, char_race, char_alignment) => {
    this.char_name = char_name;
    this.char_class = char_class;
    this.char_level = char_level;
    this.char_background = char_background;
    this.char_race = char_race;
    this.char_alignment = char_alignment;
    console.log(char_name, char_class, char_level, char_background, char_race, char_alignment);
  }

  characterExperience() {

  }
  onSaveEquipment() {

  }


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClasses().subscribe((response: any) => {
      response.results.forEach(result =>{
        this.dataService.getPlayerClass(result.index)
        .subscribe((response: any) => {
          this.classes.push(response);
        })
      })
    })
      this.dataService.getFeatures().subscribe((response: any) => {
        response.results.forEach(result =>{
          this.dataService.getSubFeatures(result.index)
          .subscribe((response: any) => {
            this.features.push(response);
          })
        })
      })
        this.dataService.getSpells().subscribe((response: any) => {
          response.results.forEach(result =>{
            this.dataService.getSpellIndex(result.index)
            .subscribe((response: any) => {
              this.spells.push(response);
            })
          })
        })
        this.dataService.getBackground().subscribe((response: any) => {
          response.results.forEach(result =>{
            this.dataService.getBackgroundIndex(result.index)
            .subscribe((response: any) => {
              this.backgrounds.push(response);
            })
          })
        })
        this.dataService.getEquipment().subscribe((response: any) => {
          response.results.forEach(result =>{
            this.dataService.getEquipmentIndex(result.index)
            .subscribe((response: any) => {
              this.equipment.push(response);
            })
          })
        })
        this.dataService.getRace().subscribe((response: any) => {
          response.results.forEach(result =>{
            this.dataService.getRaceIndex(result.index)
            .subscribe((response: any) => {
              this.race.push(response);
            })
          })
        })
        this.dataService.getFeats().subscribe((response: any) => {
          response.results.forEach(result =>{
            this.dataService.getFeatsIndex(result.index)
            .subscribe((response: any) => {
              this.feats.push(response);
            })
          })
        })

    // console.log(this.classes);
    // console.log(this.features);
    // console.log(this.spells);
    // console.log(this.feats);
    // console.log(this.backgrounds);
    // console.log(this.race);
    // console.log(this.equipment);
    // this.dataService.getPlayerClass('wizard').subscribe((response: any) => {
    //   console.log(response);
    // });
    }
  }
