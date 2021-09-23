import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutput';
  ratings: number[] = [3.5, 4, 1.5, 2, 4.5, 2.5];


  public onStarClicked(rating: number){
    console.log(`The Rating ${rating} is clicked`)

  }


}
