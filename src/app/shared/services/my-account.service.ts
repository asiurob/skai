import { Injectable } from '@angular/core';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  user: User[] = [
    {
      name: 'Alberto',
      lastName: 'Siurob',
      email: 'ing.siurob@gmail.com',
      celNumber: 5558965784,
      gender: 'masculino',
    }
  ]

  publics: motorcycle [] = [
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
  ]

  historys: motorcycle [] = [
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

  favorites: motorcycle [] = [
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

  ]

  constructor() { }
}

interface User{
  name: string,
  lastName: string,
  email: string,
  celNumber: number,
  gender: string,
}