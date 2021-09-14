import { Component, OnInit } from '@angular/core';
import { FiltersService } from './filters.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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


  constructor( 
    private filtersService: FiltersService,
    public dialogRef: MatDialogRef<FiltersComponent>,
    ) { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}