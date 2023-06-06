import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightPokeComponent } from './fight-poke.component';

describe('FightPokeComponent', () => {
  let component: FightPokeComponent;
  let fixture: ComponentFixture<FightPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightPokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
