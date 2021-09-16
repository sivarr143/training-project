import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectedValuesService } from './selected-values.service';


@Injectable({
  providedIn: 'root'
})
export class TesthelloworldService {

  constructor(private http : HttpClient, private sel : SelectedValuesService) { }

  getdata(){
    return this.http.get<any>("http://localhost:7777/helloWorld",{responseType: 'text' as 'json'});
  }

  
}
