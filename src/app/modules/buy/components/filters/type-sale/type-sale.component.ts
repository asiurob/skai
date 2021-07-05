import { Component, Input, OnInit } from '@angular/core';
import { TypeSale } from '../interface/type-sale.interface';

@Component({
  selector: 'type-sale',
  templateUrl: './type-sale.component.html',
  styleUrls: ['./type-sale.component.css']
})
export class TypeSaleComponent implements OnInit {

  @Input() typeSale: TypeSale [] = []

  constructor() { }

  ngOnInit(): void {
  }

}
