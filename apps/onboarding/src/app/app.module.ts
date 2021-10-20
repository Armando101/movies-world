import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieCardModule } from '@olimpo/frontend/onboarding/components';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, MovieCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
