import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSummaryComponent } from './movie-summary.component';



@NgModule({
  declarations: [
    MovieSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieSummaryComponent
  ]
})
export class MovieSummaryModule { }
