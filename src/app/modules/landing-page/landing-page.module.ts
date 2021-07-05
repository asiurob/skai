import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ImgMainComponent } from './components/img-main/img-main.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { InputSearchModule } from '@components/navigator/components/search/input-search/input-search.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    ImgMainComponent,
    CardImgComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    InputSearchModule
  ]
})
export class LandingPageModule { }
