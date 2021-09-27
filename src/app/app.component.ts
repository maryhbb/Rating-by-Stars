import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  ratings: number[] = [3.5, 4, 1.5, 2, 4.5, 2.5];

  public onStarClicked(rating: number) {
    console.log(`The Rating ${rating} is clicked`)

  }
}
