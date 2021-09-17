import { Component, OnInit } from '@angular/core';
import { Match } from '../services/match';
import { SelectedValuesService } from '../services/selected-values.service';
import { TesthelloworldServiceService } from '../services/testhelloworld-service.service';






@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  sample : any[]=[];

  result : Match[]=this.backend.getdata().subscribe(res => {
    if(this.sel.menuoptions !== undefined && this.sel.menuoptions === 'matchList'){
      this.sample.push(res);;
    }
  });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.result;

  constructor(private backend : TesthelloworldServiceService,private sel : SelectedValuesService) { 
    
  }

  ngOnInit(){}

}
