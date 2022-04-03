import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { ControlsModule } from '../../../components/controls/controls.module';
import { PriceModule } from '../../../components/price/price.module';

@NgModule({
  imports: [CommonModule, ControlsModule, PriceModule],
  declarations: [DetailComponent],
})
export class DetailModule {}
