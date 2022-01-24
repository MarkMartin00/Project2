import { LogLevel } from '@angular/compiler-cli/private/localize';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})

export class CharacterInfoComponent implements OnInit {
  classes: any[] = [];
  spells: any[] = [];
  features: any[] = [];
  level = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getClasses().subscribe((response: any) => {
      response.results.forEach(result =>{
        this.dataService.getPlayerClass(result.index)
        .subscribe((response: any) => {
          this.classes.push(response);
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
    });

    console.log(this.features);
    console.log(this.spells);
    // this.dataService.getPlayerClass('wizard').subscribe((response: any) => {
    //   console.log(response);
    // });
    }
  }
