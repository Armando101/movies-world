import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSummaryComponent } from './movie-summary.component';
import { MovieCardModule } from '../movie-card/movie-card.module';
import { RuntimeModule } from '@olimpo/frontend/onboarding/utilities/pipes';
import { CircleProgressBarModule } from '../circle-progress-bar/circle-progress-bar.module';

@NgModule({
  declarations: [MovieSummaryComponent],
  imports: [
    CommonModule,
    MovieCardModule,
    RuntimeModule,
    CircleProgressBarModule,
  ],
  exports: [MovieSummaryComponent],
})
export class MovieSummaryModule {}
