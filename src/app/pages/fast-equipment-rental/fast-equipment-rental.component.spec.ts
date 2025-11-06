import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastEquipmentRentalComponent } from './fast-equipment-rental.component';

describe('FastEquipmentRentalComponent', () => {
  let component: FastEquipmentRentalComponent;
  let fixture: ComponentFixture<FastEquipmentRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastEquipmentRentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastEquipmentRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
