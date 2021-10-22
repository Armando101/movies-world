import { Component, Input } from '@angular/core';

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
  @Input() genres: Array<{ id: number; name: string }> = [];
  @Input() runtime = 0;
  @Input() voteAverage = 0;
}
