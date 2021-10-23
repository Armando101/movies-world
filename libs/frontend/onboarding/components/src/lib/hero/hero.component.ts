import { Component, Input, OnChanges } from '@angular/core';

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
    this.image = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.backdropUrl}`;
  }
}
