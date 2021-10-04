import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonajesComponent } from './listar-personajes.component';

describe('ListarPersonajesComponent', () => {
  let component: ListarPersonajesComponent;
  let fixture: ComponentFixture<ListarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
