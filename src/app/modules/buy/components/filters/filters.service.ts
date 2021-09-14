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
      formControl: 'formMarca',
      data: [{
          name: 'Harley Davidson',
          infoImage: 'assets/svg/harley.png'
        },
        {
          name: 'Ducati',
          infoImage: 'assets/svg/ducati.png'
        },
        {
          name: 'BMW',
          infoImage: 'assets/svg/bmw.png'
        },
        {
          name: 'Honda',
          infoImage: 'assets/svg/honda.png'
        },
        {
          name: 'Aprilia',
          infoImage: 'assets/svg/aprilia.png'
        },
        {
          name: 'Yamaha',
          infoImage: 'assets/svg/yamaha.png'
        },
        {
          name: 'Kawasaki',
          infoImage: 'assets/svg/kawasaki.png'
        },
        {
          name: 'Suzuki',
          infoImage: 'assets/svg/suzuki.png'
        },
        {
          name: 'Indian',
          infoImage: 'assets/svg/indian.png'
        },
        {
          name: 'Keeway',
          infoImage: 'assets/svg/keeway.png'
        },
        {
          name: 'KTM',
          infoImage: 'assets/svg/ktm.png'
        },
        {
          name: 'Triumph',
          infoImage: 'assets/svg/triumph.png'
        },
        {
          name: 'Izuka',
          infoImage: 'assets/svg/izuka.png'
        },
        {
          name: 'MV Agusta',
          infoImage: 'assets/svg/mv-agusta.png'
        },
        {
          name: 'Italika',
          infoImage: 'assets/svg/italika.png'
        },
        {
          name: 'Bajaj',
          infoImage: 'assets/svg/bajaj.png'
        },
        {
          name: 'Vento',
          infoImage: 'assets/svg/vento.png'
        },
        {
          name: 'Vespa',
          infoImage: 'assets/svg/vespa.png'
        },
        {
          name: 'Victoria',
          infoImage: 'assets/svg/victoria.png'
        },
        {
          name: 'AKT',
          infoImage: 'assets/svg/akt.png'
        },
      ],
      idCollapse: 'shop_cat_1'
    },
    {
      id: 1,
      name: 'Modelo',
      formControl: 'formModelo',
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
      formControl: 'formVersion',
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
      formControl: 'formUbicacion',
      data: [{
          name: 'Aguascalientes',
          infoExtra: 'AGU'
        },
        {
          name: 'Baja California',
          infoExtra: 'BCN'
        },
        {
          name: 'Baja California Sur',
          infoExtra: 'BCS'
        },
        {
          name: 'Campeche',
          infoExtra: 'CAM'
        },
        {
          name: 'Chiapas',
          infoExtra: 'CHP'
        },
        {
          name: 'Chihuahua',
          infoExtra: 'CHH'
        },
        {
          name: 'Ciudad de México',
          infoExtra: 'CDMX'
        },
        {
          name: 'Coahuila',
          infoExtra: 'COA'
        },
        {
          name: 'Colima',
          infoExtra: 'COL'
        },
        {
          name: 'Durango',
          infoExtra: 'DUR'
        },
        {
          name: 'Guanajuato',
          infoExtra: 'GUA'
        },
        {
          name: 'Guerrero',
          infoExtra: 'GRO'
        },
        {
          name: 'Hidalgo',
          infoExtra: 'HID'
        },
        {
          name: 'Jalisco',
          infoExtra: 'JAL'
        },
        {
          name: 'Estado de México',
          infoExtra: 'EDO MEX'
        },
        {
          name: 'Michoacan',
          infoExtra: 'MIC'
        },
        {
          name: 'Morelos',
          infoExtra: 'MOR'
        },
        {
          name: 'Nayarit',
          infoExtra: 'NAY'
        },
        {
          name: 'Nuevo León',
          infoExtra: 'NLE'
        },
        {
          name: 'Oaxaca',
          infoExtra: 'OAX'
        },
        {
          name: 'Puebla',
          infoExtra: 'PUE'
        },
        {
          name: 'Querétaro',
          infoExtra: 'QUE'
        },
        {
          name: 'Quintana Roo',
          infoExtra: 'ROO'
        },
        {
          name: 'San Luis Potosi',
          infoExtra: 'SLP'
        },
        {
          name: 'Sinaloa',
          infoExtra: 'SIN'
        },
        {
          name: 'Sonora',
          infoExtra: 'SON'
        },
        {
          name: 'Tabasco',
          infoExtra: 'TAB'
        },
        {
          name: 'Tamaulipas',
          infoExtra: 'TAM'
        },
        {
          name: 'Tlaxcala',
          infoExtra: 'TLA'
        },
        {
          name: 'Veracruz',
          infoExtra: 'VER'
        },
        {
          name: 'Yucatán',
          infoExtra: 'YUC'
        },
        {
          name: 'Zacatecas',
          infoExtra: 'ZAC'
        },
      ],
      idCollapse: 'shop_cat_4'
    },
    {
      id: 4,
      name: 'Cilindrada',
      formControl: 'formCilindrada',
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
      name: 'Azul',
      idCheckbox: 'colorsidebar1'
    },
    {
      hexadecimal: 'color: #FCD71E',
      name: 'Amarillo',
      idCheckbox: 'colorsidebar2'
    },
    {
      hexadecimal: 'color: #000',
      name: 'Negro',
      idCheckbox: 'colorsidebar3'
    },
    {
      hexadecimal: 'color: #f73636',
      name: 'Rojo',
      idCheckbox: 'colorsidebar4'
    },
    {
      hexadecimal: 'color: #17a2b8',
      name: 'Cian',
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
