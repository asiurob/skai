import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SellComponent
  ],
  imports: [
    CommonModule,
    SellRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class SellModule { }
