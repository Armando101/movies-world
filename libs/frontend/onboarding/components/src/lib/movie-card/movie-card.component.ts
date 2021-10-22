import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() overview?: string;
  @Input() hover = true;

  constructor() {
    console.log('it works');
  }
}
