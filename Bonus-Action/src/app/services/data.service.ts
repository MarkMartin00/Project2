import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
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
  public getFeatures() { //feats
    return this.http.get(`${url}/features`)
  }
  public getSubFeatures(index:string) { //index of feats
    return this.http.get(`${url}/features/${index}`)
  }
  public getSpells() {
    return this.http.get(`${url}/spells`)
  }
  public getSpellIndex(index: string) {
    return this.http.get(`${url}/spells/${index}`)
  }
  public getBackground() {
    return this.http.get(`${url}/backgrounds`)
  }
  public getBackgroundIndex(index: string) {
    return this.http.get(`${url}/backgrounds/${index}`)
  }
  public getRace() {
    return this.http.get(`${url}/races`)
  }
  public getRaceIndex(index: string) {
    return this.http.get(`${url}/races/${index}`)
  }
  public getEquipment() {
    return this.http.get(`${url}/equipment-categories`)
  }
  public getEquipmentIndex(index: string) {
    return this.http.get(`${url}/equipment-categories/${index}`)
  }
  public getFeats() {
    return this.http.get(`${url}/feats`)
  }
  public getFeatsIndex(index: string) {
    return this.http.get(`${url}/feats/${index}`)
  }
}
