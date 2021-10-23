import { Component, Input, OnChanges } from '@angular/core';
import { imageCard, imagePath } from '../constants/imageSizes';

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
    this.image = `${imagePath}/${imageCard}/${this.imageUrl}`;
  }
}
