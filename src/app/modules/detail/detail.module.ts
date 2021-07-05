import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    DetailComponent,
    MotorcycleComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
