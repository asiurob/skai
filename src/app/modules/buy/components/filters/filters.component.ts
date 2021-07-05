import { Component, OnInit } from '@angular/core';
import { FiltersService } from './filters.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  get categories() {
    return this.filtersService.categories
  }

  get color() {
    return this.filtersService.color
  }

  get tipoDeVenta() {
    return this.filtersService.tipoDeVenta
  }

  constructor( private filtersService: FiltersService) { }

  ngOnInit(): void {
  }
}