import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductsComponent } from './crear-products.component';

describe('CrearProductsComponent', () => {
  let component: CrearProductsComponent;
  let fixture: ComponentFixture<CrearProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
