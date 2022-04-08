import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidepublicComponent } from './slidepublic.component';

describe('SlidepublicComponent', () => {
  let component: SlidepublicComponent;
  let fixture: ComponentFixture<SlidepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidepublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
