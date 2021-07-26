import { Injectable } from '@angular/core';
import { DataCard } from './landing-page.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  _dataCards: DataCard[] = [
    {
    img: 'assets/static/img/imagen1.jpg',
    title: 'Nuevo',
    subtitle: 'Motos',
    link: '#',
    textLink: 'Entrar',
  },
  {
    img: 'assets/static/img/imagen2.jpg',
    title: 'Nuevo',
    subtitle: 'Motos',
    link: '#',
    textLink: 'Entrar',
  },
  {
    img: 'assets/static/img/imagen3.jpg',
    title: 'Nuevo',
    subtitle: 'Motos',
    link: '#',
    textLink: 'Entrar',
  },
]


  constructor() { }

  get dataCard(){
    return [...this._dataCards]
  }
}


