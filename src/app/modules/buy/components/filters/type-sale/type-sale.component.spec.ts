import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSaleComponent } from './type-sale.component';

describe('TypeSaleComponent', () => {
  let component: TypeSaleComponent;
  let fixture: ComponentFixture<TypeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
