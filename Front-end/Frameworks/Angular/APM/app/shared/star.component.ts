import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css'],
})

export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    // To calculate the width we use the ecuation:
    // (Actual-rating * Width-container) / Max-rating  
    this.starWidth = this.rating * 86 / 5;
  }
  onClick(){
    // this.OutputProperty.emit(valueOutput)
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}