import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

}


