import { Component, Input } from '@angular/core';
import { IGenre } from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss'],
})
export class MovieSummaryComponent {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() overview = '';
  @Input() progressBarTitle = '';
  @Input() releaseDate = '';
  @Input() genres: Array<IGenre> = [];
  @Input() runtime = 0;
  @Input() voteAverage = 0;
}
