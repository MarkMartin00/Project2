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
  features: any [] = [];

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
