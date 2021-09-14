import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Color } from '../interface/color.interface';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  @Input() colors:Color [] = []

  formColor: FormGroup = this.fb.group({
    name: ['']
   })

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
