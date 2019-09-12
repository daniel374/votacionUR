import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasConsejosComponent } from './formulas-consejos.component';

describe('FormulasConsejosComponent', () => {
  let component: FormulasConsejosComponent;
  let fixture: ComponentFixture<FormulasConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulasConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulasConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
