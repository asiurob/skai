import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../interface/color.interface';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  @Input() colors:Color [] = []

  constructor() { }

  ngOnInit(): void {
  }

}
