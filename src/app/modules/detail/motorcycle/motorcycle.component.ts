import { Component, Input, OnInit } from '@angular/core';
import { motorcycle } from 'shared/interface/motorcycle.interface';


@Component({
  selector: 'motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {

  @Input() motos!: motorcycle 

  constructor() { }

  ngOnInit(): void {
  }

}
