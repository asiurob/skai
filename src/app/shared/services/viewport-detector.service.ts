import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewportDetectorService {

  private mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _isMobile: BehaviorSubject<boolean>;


  constructor(
    @Optional() private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change',this._mobileQueryListener);
    this._isMobile = new BehaviorSubject<boolean>( this.mobileQuery.matches );
  }

  isMobile(): Observable<boolean> {
    return this._isMobile.asObservable()
    .pipe(
      distinctUntilChanged()
    );
  }


}
