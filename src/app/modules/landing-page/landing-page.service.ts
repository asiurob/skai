import { Injectable } from '@angular/core';
import { DataCard } from './landing-page.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  _dataCards: DataCard[] = [
    {
    img: 'assets/static/img/imagen1.jpg',
    title: 'NEW IN',
    subtitle: 'WOMEN’S',
    link: '#',
    textLink: 'Entrar',
  },
  {
    img: 'assets/static/img/imagen2.jpg',
    title: 'NEW IN',
    subtitle: 'MAN’S',
    link: '#',
    textLink: 'Entrar',
  },
  {
    img: 'assets/static/img/imagen3.jpg',
    title: 'NEW IN',
    subtitle: 'WOMEN’S',
    link: '#',
    textLink: 'Entrar',
  },
]


  constructor() { }

  get dataCard(){
    return [...this._dataCards]
  }
}


