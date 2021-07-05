import {
  Injectable
} from '@angular/core';
import { Categories } from './interface/categories.interface';
import { Color } from './interface/color.interface';
import { TypeSale } from './interface/type-sale.interface';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  _categories: Categories[] = [{
    id: 0,
      name: 'Marca',
      data: [{
          name: 'honda'
        },
        {
          name: 'Harley Davidson'
        },
        {
          name: 'Yamaha'
        },
        {
          name: 'BMW'
        },
        {
          name: 'Keeway'
        },
        {
          name: 'Ducari'
        },
        {
          name: 'Indian MI'
        },
      ],
      idCollapse: 'shop_cat_1'
    },
    {
      id: 1,
      name: 'Modelo',
      data: [{
          name: '2021'
        },
        {
          name: '2020'
        },
        {
          name: '2019'
        },
        {
          name: '2018'
        },
        {
          name: '2017'
        },
        {
          name: '2016'
        },
        {
          name: '2015'
        },
        {
          name: '2014'
        },
        {
          name: '2013'
        },
        {
          name: '2012'
        },
        {
          name: '2011'
        },
        {
          name: '2010'
        },
      ],
      idCollapse: 'shop_cat_2'
    },

    {
      id: 2,
      name: 'Versión',
      data: [{
          name: 'Touring'
        },
        {
          name: 'Touring'
        },
      ],
      idCollapse: 'shop_cat_3'
    },
    {
      id: 3,
      name: 'Ubicación',
      data: [{
          name: 'CDMX'
        },
        {
          name: 'TIJ'
        },
        {
          name: 'GDL'
        },
        {
          name: 'EDO'
        },
      ],
      idCollapse: 'shop_cat_4'
    },
    {
      id: 4,
      name: 'Cilindrada',
      data: [{
        name: '150CC'
        },
        {
          name: '450CC'
        },
        {
          name: '550CC'
        },
        {
          name: '750CC'
        }
      ],
      idCollapse: 'shop_cat_5'
    }
  ]


  _colors: Color[] = [
    {
      hexadecimal: 'color: #1F45FC',
      name: 'Royal Blue',
      idCheckbox: 'colorsidebar1'
    },
    {
      hexadecimal: 'color: #FCD71E',
      name: 'Yellow',
      idCheckbox: 'colorsidebar2'
    },
    {
      hexadecimal: 'color: #000',
      name: 'Black',
      idCheckbox: 'colorsidebar3'
    },
    {
      hexadecimal: 'color: #f73636',
      name: 'Red',
      idCheckbox: 'colorsidebar4'
    },
    {
      hexadecimal: 'color: #17a2b8',
      name: 'Cyan',
      idCheckbox: 'colorsidebar5'
    },
  ]

  _tipoDeVenta: TypeSale[] = [
    {
     typeCheckbox: 'brand1',
      name: 'Venta'
    },
    { 
      typeCheckbox: 'brand2',
      name: 'Cambio'
    },
    {
      typeCheckbox: 'brand3',
      name: 'Venta o cambio'
    },
  ]


  get categories() {
    return [...this._categories];
  }
  get color() {
    return [...this._colors];
  }
  get tipoDeVenta() {
    return [...this._tipoDeVenta];
  }

  constructor() {}
}
