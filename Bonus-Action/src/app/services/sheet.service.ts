import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharClass } from '../interface/char-class';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

  getClasses(): Observable<CharClass[]> {
    return this.http.get<CharClass[]>(`${apiUrl}/classes`);
  }
  getClass(index: string): Observable<CharClass> {
    return this.http.get<CharClass>(`${apiUrl}classes/${index}`);
  }
}


