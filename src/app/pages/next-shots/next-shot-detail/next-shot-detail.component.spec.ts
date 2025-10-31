import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShotDetailComponent } from './next-shot-detail.component';

describe('NextShotDetailComponent', () => {
  let component: NextShotDetailComponent;
  let fixture: ComponentFixture<NextShotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextShotDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextShotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
