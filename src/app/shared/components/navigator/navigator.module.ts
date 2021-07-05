import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { InputSearchModule } from './components/search/input-search/input-search.module';

@NgModule({
  declarations: [
    NavigatorComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputSearchModule
    
  ],
  exports:[NavigatorComponent]
})
export class NavigatorModule { }
