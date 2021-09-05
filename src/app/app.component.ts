import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

interface seas {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Seasons: seas[] = [{value:'2021 Season',viewValue: '2021 Season'},{value:'2020 Season',viewValue: '2020 Season'},{value:'2019 Season',viewValue: '2018 Season'}];
  
}
