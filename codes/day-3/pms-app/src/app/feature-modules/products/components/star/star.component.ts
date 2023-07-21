import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input('rating') starRating = 0
  divWidth = 100

  ngOnChanges() {
    this.divWidth = this.starRating * 15.6
  }
}
