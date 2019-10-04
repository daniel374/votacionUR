import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasConsejoComponent } from './formulas-consejo.component';

describe('FormulasConsejoComponent', () => {
  let component: FormulasConsejoComponent;
  let fixture: ComponentFixture<FormulasConsejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulasConsejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulasConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
