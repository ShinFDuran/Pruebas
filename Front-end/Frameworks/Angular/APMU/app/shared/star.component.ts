import { Component, OnChanges, Input,
  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  moduleId: module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
  // We receive the rating value on a directive attribute
  // <ai-star [rating]='product.starRating'></ai-star>
  @Input() rating: number;
  starWidth: number;

  // To send info to our father component we need use a custom event
  // The type must be EventEmitter<returnTypeData>
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    // Full view 5 stars = 86px.  We use this formula to crop the display
    this.starWidth = this.rating * 86/5;
  }

    // The click event o our nested component will trigger another event
    // That custom event will emit the string info
  onClick(): void {    
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);    
  }
}