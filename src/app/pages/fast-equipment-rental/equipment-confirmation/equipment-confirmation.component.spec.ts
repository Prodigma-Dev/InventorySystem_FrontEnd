import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentConfirmationComponent } from './equipment-confirmation.component';

describe('EquipmentConfirmationComponent', () => {
  let component: EquipmentConfirmationComponent;
  let fixture: ComponentFixture<EquipmentConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
