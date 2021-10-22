import { Component, Input } from '@angular/core';
import { ICast, ICrew } from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.scss'],
})
export class MovieCreditsComponent {
  @Input() title!: string;
  @Input() credits: ICast[] | ICrew[] = [];
}
