import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportserviceComponent } from './reportservice.component';

describe('ReportserviceComponent', () => {
  let component: ReportserviceComponent;
  let fixture: ComponentFixture<ReportserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
