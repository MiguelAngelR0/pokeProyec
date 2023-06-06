import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailPageComponent } from './poke-detail-page.component';

describe('PokeDetailPageComponent', () => {
  let component: PokeDetailPageComponent;
  let fixture: ComponentFixture<PokeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
