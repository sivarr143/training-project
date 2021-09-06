import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menulist: string[]=['Batting','No Runs','No.of.Centuries'];

  constructor() { }

  ngOnInit(): void {
  }

}
