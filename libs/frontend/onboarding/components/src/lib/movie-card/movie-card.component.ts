import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {

  @Input() id = '';
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() overview = '';
  @Input() hover = false;

  constructor() {
    console.log('it works');
  }

}
