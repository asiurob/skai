import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy.component';
import { FiltersComponent } from './components/filters/filters.component';

const routes: Routes = [
  {
    path: '',
    component: BuyComponent,
    children: [
      {
        path: 'filters',
        component: FiltersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
