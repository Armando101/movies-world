import { Component, Input, OnChanges } from '@angular/core';
import { imageHero, imagePath } from '../constants/imageSizes';

@Component({
  selector: 'frontend-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnChanges {
  @Input() title = '';
  @Input() tagline = '';
  @Input() backdropUrl = '';
  image!: string;

  ngOnChanges() {
    this.image = `${imagePath}/${imageHero}/${this.backdropUrl}`;
  }
}
