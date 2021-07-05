import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../interface/categories.interface';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

   @Input() filters:Categories []=[]

  
 quantity(a:any){
  return this.filters[a].data.length
 }

  constructor() { }

  ngOnInit(): void {
  }

}
