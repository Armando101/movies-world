import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {
  MovieCardModule,
  NoResultsModule,
  LoaderModule,
  CardsPanelModule,
} from '@olimpo/frontend/onboarding/components';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MovieCardModule,
    NoResultsModule,
    LoaderModule,
    CardsPanelModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
