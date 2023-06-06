import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePokePageComponent } from './battle-poke-page.component';

describe('BattlePokePageComponent', () => {
  let component: BattlePokePageComponent;
  let fixture: ComponentFixture<BattlePokePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlePokePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattlePokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
