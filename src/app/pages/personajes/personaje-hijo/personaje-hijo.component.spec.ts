import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeHijoComponent } from './personaje-hijo.component';

describe('PersonajeHijoComponent', () => {
  let component: PersonajeHijoComponent;
  let fixture: ComponentFixture<PersonajeHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
