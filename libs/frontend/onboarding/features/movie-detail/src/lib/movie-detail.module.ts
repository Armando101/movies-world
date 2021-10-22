import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';

import {
  HeroModule,
  MovieCardModule,
  MovieCreditsModule,
  MovieSummaryModule,
} from '@olimpo/frontend/onboarding/components';
@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    HeroModule,
    MovieSummaryModule,
    MovieCreditsModule,
    MovieCardModule,
  ],
  exports: [MovieDetailComponent],
})
export class MovieDetailModule {}
