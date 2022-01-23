import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

let url = apiUrl;
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  public getClasses(){
    return this.http.get(`${url}/classes`)
  }
  public getPlayerClass(pc_class: string){
    return this.http.get(`${url}/classes/${pc_class}`)
  }
}
