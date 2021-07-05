import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from '@modules/landing-page/landing-page.interface';

@Component({
  selector: 'card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {

  @Input() datas: DataCard [] = []

  constructor() { }

  ngOnInit(): void {
  }
}