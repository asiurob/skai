import { Component, OnInit } from '@angular/core';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  motos: motorcycle = {
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
    comments:        'Tiene un detalle estetico en el asiento'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
