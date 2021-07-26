import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardMotoComponent } from './components/card-moto/card-moto.component';
import { CategoriesComponent } from './components/filters/categories/categories.component';
import { ColorsComponent } from './components/filters/colors/colors.component';
import { TypeSaleComponent } from './components/filters/type-sale/type-sale.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';



@NgModule({
  declarations: [
    BuyComponent,
    FiltersComponent,
    CardMotoComponent,
    CategoriesComponent,
    ColorsComponent,
    TypeSaleComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule,
    ShortcutModule,

  ]
})
export class BuyModule { }
