import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  get dataCard(){
    return this.landingServices.dataCard
  }

  constructor( private landingServices: LandingPageService) { }

  ngOnInit(): void {
  }

}
