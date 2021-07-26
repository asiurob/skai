import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';

import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    DetailComponent,
    MotorcycleComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CarouselModule
    
  ]
})
export class DetailModule { }
