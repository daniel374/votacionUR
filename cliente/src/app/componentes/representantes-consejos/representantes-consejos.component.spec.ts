import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesConsejosComponent } from './representantes-consejos.component';

describe('RepresentantesConsejosComponent', () => {
  let component: RepresentantesConsejosComponent;
  let fixture: ComponentFixture<RepresentantesConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantesConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantesConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
