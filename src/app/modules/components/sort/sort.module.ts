import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortComponent } from './sort.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SortComponent],
  exports: [SortComponent],
})
export class SortModule {}
