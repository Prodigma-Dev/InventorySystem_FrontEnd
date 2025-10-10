import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShotsComponent } from './next-shots.component';

describe('NextShotsComponent', () => {
  let component: NextShotsComponent;
  let fixture: ComponentFixture<NextShotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextShotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
