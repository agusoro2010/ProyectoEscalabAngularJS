import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajePadreComponent } from './personaje-padre.component';

describe('PersonajePadreComponent', () => {
  let component: PersonajePadreComponent;
  let fixture: ComponentFixture<PersonajePadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajePadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
