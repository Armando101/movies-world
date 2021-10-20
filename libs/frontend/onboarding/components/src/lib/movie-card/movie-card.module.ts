import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardRoutingModule } from './movie-card-routing.module';
import { MovieCardComponent } from './movie-card.component';


@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MovieCardRoutingModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class MovieCardModule { }
