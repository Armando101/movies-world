import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {
  MovieCardModule,
  HeaderModule,
  FooterModule,
  NoResultsModule,
  LoaderModule,
} from '@olimpo/frontend/onboarding/components';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MovieCardModule,
    HeaderModule,
    FooterModule,
    NoResultsModule,
    LoaderModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
