import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Harrypotter1Component } from './harrypotter1.component';

describe('Harrypotter1Component', () => {
  let component: Harrypotter1Component;
  let fixture: ComponentFixture<Harrypotter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Harrypotter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Harrypotter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
