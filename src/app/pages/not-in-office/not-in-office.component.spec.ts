import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInOfficeComponent } from './not-in-office.component';

describe('NotInOfficeComponent', () => {
  let component: NotInOfficeComponent;
  let fixture: ComponentFixture<NotInOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotInOfficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotInOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
