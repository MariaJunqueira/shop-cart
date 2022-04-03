import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsComponent } from './controls.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlsComponent],
  exports: [ControlsComponent],
})
export class ControlsModule {}
