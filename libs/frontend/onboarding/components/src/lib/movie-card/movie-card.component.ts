import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'frontend-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnChanges {
  @Input() id?: number;
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() overview?: string;
  @Input() hover = true;
  image!: string;

  ngOnChanges() {
    this.image = `https://image.tmdb.org/t/p/w220_and_h330_face/${this.imageUrl}`;
  }
}
