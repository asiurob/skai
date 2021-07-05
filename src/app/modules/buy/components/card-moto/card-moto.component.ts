import { Component, OnInit } from '@angular/core';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Component({
  selector: 'card-moto',
  templateUrl: './card-moto.component.html',
  styleUrls: ['./card-moto.component.css']
})
export class CardMotoComponent implements OnInit {

  motos: motorcycle [] = [
    {
    img:             'assets/static/img/moto5.jpg',
    marca:           'Honda',
    modelo:          2021,
    version:         'Touring',
    displacement:    150,
    mileage:         10.400,
    location:        'CDMX',
    mainColor:       'azul',
    secondaryColor:  'negro',
    saleType:        'venta',
    price:           35000,
  },
  {
    img:             'assets/static/img/moto4.jpg',
    marca:           'Honda',
    modelo:          2020,
    version:         'Touring',
    displacement:    750,
    mileage:         105.400,
    location:        'GDL',
    mainColor:       'azul',
    secondaryColor:  'negro',
    saleType:        'venta',
    price:           75000,
  },
  {
    img:             'assets/static/img/moto5.jpg',
    marca:           'Honda',
    modelo:          2020,
    version:         'Touring',
    displacement:    550,
    mileage:         75.400,
    location:        'TJ',
    mainColor:       'azul',
    secondaryColor:  'negro',
    saleType:        'venta',
    price:           135000,
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
