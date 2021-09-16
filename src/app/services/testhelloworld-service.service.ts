import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectedValuesService } from './selected-values.service';

@Injectable({
  providedIn: 'root'
})
export class TesthelloworldServiceService {

  constructor(private http : HttpClient, private sel : SelectedValuesService) { }

  getdata(){
    // if(this.sel.menuoptions === 'helloWorld'){
    // return this.http.get<any>("http://localhost:7777/"+this.sel.menuoptions,{responseType: 'text' as 'json'});
    // }
    // else{
      return this.http.get<any>("http://localhost:7777/matches/"+this.sel.menuoptions+"/"+this.sel.season, {responseType: 'text' as 'json'});
    // }
  }
}
