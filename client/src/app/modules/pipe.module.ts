import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceMaxFilterPipe, PriceMinFilterPipe } from '../pipes/price-filter.pipe';
import { RandomOrderPipe } from '../pipes/random-order.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PriceMinFilterPipe,
    PriceMaxFilterPipe,
    RandomOrderPipe

  ],
  exports: [
    PriceMinFilterPipe,
    PriceMaxFilterPipe,
    RandomOrderPipe
  ]
})

export class PipesModule { }
