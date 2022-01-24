import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  classes: any[] = [];
  level: number[] = [1,2,3];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getClasses().subscribe((response: any) => {
      response.results.forEach(result =>{
        this.dataService.getPlayerClass(result.index)
        .subscribe((response: any) => {
          this.classes.push(response);
        })
      })
    });

    console.log(this.classes)
    console.log(this.level);
    // this.dataService.getPlayerClass('wizard').subscribe((response: any) => {
    //   console.log(response);
    // });
  }
}
