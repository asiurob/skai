import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Categories } from '../interface/categories.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewportDetectorService } from '@services/viewport-detector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

   @Input() filters:Categories []=[]


   subs: Subscription[] = [];
   isMobile!: boolean;
   formMarca: FormGroup = this.fb.group({
    name: ['']
   })
   formModelo: FormGroup = this.fb.group({
    name: ['']
   })
   formVersion: FormGroup = this.fb.group({
    name: ['']
   })
   formUbicacion: FormGroup = this.fb.group({
    name: ['']
   })
   formCilindrada: FormGroup = this.fb.group({
    name: ['']
   })
  
 quantity(a:any){
  return this.filters[a].data.length
 }

  constructor(
    private fb : FormBuilder,
    private viewportService$: ViewportDetectorService
  ) { 
    
  }
  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    console.log(this.isMobile)
    const s = this.viewportService$.isMobile()
    .subscribe( is => this.isMobile = is );
    this.subs.push( s );
    this.sizeImage()
    console.log(this.isMobile)
  }

  sizeImage():string{
   return this.isMobile ? 'option-img-movile' : 'option-img' 
  }

}
