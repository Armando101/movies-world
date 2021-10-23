import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPanelComponent } from './cards-panel.component';

import { MovieCardModule } from '../movie-card/movie-card.module';
import { NoResultsModule } from '../no-results/no-results.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [CardsPanelComponent],
  imports: [CommonModule, MovieCardModule, NoResultsModule, LoaderModule],
  exports: [CardsPanelComponent],
})
export class CardsPanelModule {}
