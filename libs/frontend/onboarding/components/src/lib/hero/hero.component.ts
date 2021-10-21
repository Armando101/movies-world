import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() title = '';
  @Input() tagline = '';
  @Input() backdropUrl = '';
}
