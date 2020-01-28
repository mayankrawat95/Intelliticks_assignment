import { Component } from '@angular/core';
import { InterviewService } from './services/interview.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  username = 'harry';
  unoccupied_houses = [];
  occupied_houses = [];


  constructor(private interviewService: InterviewService) {}


  getHouses() {
    this.interviewService.getUserData(this.username).subscribe(houses => this.unoccupied_houses = houses)
  }

  occupyHouse(id) {
    alert(id);

    //remove item from unoccupied house and add to occupied house
  }
}
