import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.rating = this.rating * 75 / 5;
  }
}