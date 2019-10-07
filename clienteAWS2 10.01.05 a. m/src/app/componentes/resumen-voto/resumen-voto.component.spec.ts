import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenVotoComponent } from './resumen-voto.component';

describe('ResumenVotoComponent', () => {
  let component: ResumenVotoComponent;
  let fixture: ComponentFixture<ResumenVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
