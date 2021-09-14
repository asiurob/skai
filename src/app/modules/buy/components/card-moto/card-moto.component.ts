import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Component({
  selector: 'card-moto',
  templateUrl: './card-moto.component.html',
  styleUrls: ['./card-moto.component.css']
})
export class CardMotoComponent implements OnInit {

  @Input() moto!: motorcycle

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }

  detailMoto(){
    this._router.navigateByUrl('detail')
  }

}
