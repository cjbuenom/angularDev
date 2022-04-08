import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataorderComponent } from './dataorder.component';

describe('DataorderComponent', () => {
  let component: DataorderComponent;
  let fixture: ComponentFixture<DataorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
