import { Component, OnInit } from '@angular/core';
import { SelectedValuesService } from '../services/selected-values.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selected = '';
  menulist: string[]=['helloWorld','matchList','topScorers','topBowlers','Most Fours (Innings)','Most Sixes','Most Sixes (Innings)'];

  constructor(private sel : SelectedValuesService) { }

  ngOnInit(): void {
  }

  onchange($event : any){
    if(this.sel.season !== undefined)
    {
      this.sel.menuoptions = $event.source._value[0];
      console.log(this.sel.menuoptions);
    }
    else
    {
      alert("Please select a season first");
    }
  }

}
