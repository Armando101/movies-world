import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreditsComponent } from './movie-credits.component';

import { PersonCardModule } from '../person-card/person-card.module';
import { NoResultsModule } from '../no-results/no-results.module';

@NgModule({
  declarations: [MovieCreditsComponent],
  imports: [CommonModule, PersonCardModule, NoResultsModule],
  exports: [MovieCreditsComponent],
})
export class MovieCreditsModule {}
