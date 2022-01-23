import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bonus-Action';
  classes: any[] = [];

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
    // this.dataService.getPlayerClass('wizard').subscribe((response: any) => {
    //   console.log(response);
    // });
  }
}
