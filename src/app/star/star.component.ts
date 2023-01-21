import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 3.5;
  @Output() starClicked = new EventEmitter<number>();
  width: number = 95;

  constructor() {}

  ngOnInit(): void {
    this.width = (this.rating * 95) / 5;
  }

  public onClick() {
    this.starClicked.emit(this.rating);
  }
}
