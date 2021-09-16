import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title='training';
  Season: number[] = [
    2020,2019,2018,2017,2016
  ];

  Team: string[]=[
    'Royal Challengers Bangalore','Chennai Super Kings','Mumbai Indians','Kolkata Knight Riders','Sunrisers Hyderabad'
  ];

  Player: string[]=[
    'MS Dhoni','Robin Uthappa','N Jagadeesan','Ambati Rayudu',
  ];

  data(){
    
  }
}
