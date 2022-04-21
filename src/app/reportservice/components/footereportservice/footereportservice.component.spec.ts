import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootereportserviceComponent } from './footereportservice.component';

describe('FootereportserviceComponent', () => {
  let component: FootereportserviceComponent;
  let fixture: ComponentFixture<FootereportserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootereportserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootereportserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
