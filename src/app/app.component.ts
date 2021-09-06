import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='training';
  Season: string[] = [
    '2021 Season','2020 Season','2019 Season','2018 Season'
  ];

  Team: string[]=[
    'Royal Challengers Bangalore','Chennai Super Kings','Mumbai Indians','Kolkata Knight Riders','Sunrisers Hyderabad'
  ];

  Player: string[]=[
    'MS Dhoni','Robin Uthappa','N Jagadeesan','Ambati Rayudu',
  ];
}
