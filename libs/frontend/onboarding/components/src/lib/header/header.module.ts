import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, HeaderRoutingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
