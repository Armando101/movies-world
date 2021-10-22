import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuntimePipe } from './runtime.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [RuntimePipe],
  exports: [RuntimePipe],
})
export class RuntimeModule {}
