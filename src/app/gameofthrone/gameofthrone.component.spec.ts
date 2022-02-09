import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameofthroneComponent } from './gameofthrone.component';

describe('GameofthroneComponent', () => {
  let component: GameofthroneComponent;
  let fixture: ComponentFixture<GameofthroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameofthroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameofthroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
