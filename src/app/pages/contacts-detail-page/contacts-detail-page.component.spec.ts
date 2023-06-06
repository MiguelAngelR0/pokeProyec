import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailPageComponent } from './contacts-detail-page.component';

describe('ContactsDetailPageComponent', () => {
  let component: ContactsDetailPageComponent;
  let fixture: ComponentFixture<ContactsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
