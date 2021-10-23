import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CardsPanelModule } from '@olimpo/frontend/onboarding/components';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    CardsPanelModule,
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
