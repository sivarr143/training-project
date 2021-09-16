import { Component, OnInit } from '@angular/core';
import { SelectedValuesService } from '../services/selected-values.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selected = '';
  menulist: string[]=['Batting','Most Runs','Most Runs (Over)','Most Fours','Most Fours (Innings)','Most Sixes','Most Sixes (Innings)'];

  constructor(private sel : SelectedValuesService) { }

  ngOnInit(): void {
  }

  onchange($event : any){
    if(this.sel.season !== undefined)
    {
    console.log($event.source._value[0]);
    }
    else
    {
      alert("Please select a season first");
    }
  }

}
