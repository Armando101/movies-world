import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card.component';



@NgModule({
  declarations: [
    PersonCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonCardComponent
  ]
})
export class PersonCardModule { }
