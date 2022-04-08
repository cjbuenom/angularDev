import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatareportserviceComponent } from './datareportservice.component';

describe('DatareportserviceComponent', () => {
  let component: DatareportserviceComponent;
  let fixture: ComponentFixture<DatareportserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatareportserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatareportserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
