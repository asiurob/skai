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
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

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
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule
    
  ]
})
export class BuyModule { }
