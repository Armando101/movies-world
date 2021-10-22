import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  MovieCardModule,
  HeroModule,
  CircleProgressBarModule,
  MovieSummaryModule,
  PersonCardModule,
} from '@olimpo/frontend/onboarding/components';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    MovieCardModule,
    HeroModule,
    CircleProgressBarModule,
    MovieSummaryModule,
    PersonCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
