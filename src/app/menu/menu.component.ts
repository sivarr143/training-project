import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selected = '';
  menulist: string[]=['Batting','Most Runs','Most Runs (Over)','Most Fours','Most Fours (Innings)','Most Sixes','Most Sixes (Innings)'];

  constructor() { }

  ngOnInit(): void {
  }

}
