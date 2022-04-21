import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridatareportComponent } from './gridatareport.component';

describe('GridatareportComponent', () => {
  let component: GridatareportComponent;
  let fixture: ComponentFixture<GridatareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridatareportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridatareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
