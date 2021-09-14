import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersComponent } from './components/filters/filters.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewportDetectorService } from '@services/viewport-detector.service';
import { Subscription } from 'rxjs';
import { MotosService } from '@services/motos.service';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit, OnDestroy {

  isMobile!: boolean;
  subs: Subscription[] = [];
  motos: motorcycle [] = [];

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    private moto$: MotosService,
    private viewportService$: ViewportDetectorService
  ) { }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    this.getMotos()
    const s = this.viewportService$.isMobile()
    .subscribe( is => this.isMobile = is );
    this.subs.push( s );
  }

  getMotos(){
    this.motos = this.moto$.motos
  }

  filters(): void {
    this._router.navigateByUrl(`buy/filters`);
    const width = this.isMobile ? '100vw' : '80%';
    const height = this.isMobile ? '80vh' : '80%';
    const dialogRef = this.dialog.open(
      FiltersComponent,
      { width, height }
    );

    const s = dialogRef.afterClosed()
    .subscribe( data =>  {
      this._router.navigateByUrl('buy');
      if ( data  ) {
        this.getMotos();
      }

    });

    this.subs.push( s );
  }

}
