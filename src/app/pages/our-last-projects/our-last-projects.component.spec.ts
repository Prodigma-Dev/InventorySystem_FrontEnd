import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLastProjectsComponent } from './our-last-projects.component';

describe('OurLastProjectsComponent', () => {
  let component: OurLastProjectsComponent;
  let fixture: ComponentFixture<OurLastProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurLastProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurLastProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
