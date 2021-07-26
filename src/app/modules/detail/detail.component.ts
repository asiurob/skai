import {
  Component,
  OnInit
} from '@angular/core';
import {
  motorcycle
} from 'shared/interface/motorcycle.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    }
  }

  motos: motorcycle = {
    img: 'assets/static/img/moto5.jpg',
    marca: 'Honda',
    modelo: 2021,
    version: 'Touring',
    displacement: 150,
    mileage: 10.400,
    location: 'CDMX',
    mainColor: 'azul',
    secondaryColor: 'negro',
    saleType: 'venta',
    price: 35000,
    comments: 'Tiene un detalle estetico en el asiento'
  }

  image: Image[] = [{
      url: 'assets/static/img/moto1.jpg'
    },
    {
      url: 'assets/static/img/moto2.jpg'
    },
    {
      url: 'assets/static/img/moto3.jpg'
    },
    {
      url: 'assets/static/img/moto4.jpg'
    },
    {
      url: 'assets/static/img/moto5.jpg'
    },
    {
      url: 'assets/static/img/moto6.jpg'
    },
    {
      url: 'assets/static/img/moto7.jpg'
    },
    {
      url: 'assets/static/img/moto8.jpg'
    }
  ]


  constructor() {}

  ngOnInit(): void {}

}


export interface Image {
  url: string
}
