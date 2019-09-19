import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesConsejoComponent } from './representantes-consejo.component';

describe('RepresentantesConsejoComponent', () => {
  let component: RepresentantesConsejoComponent;
  let fixture: ComponentFixture<RepresentantesConsejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantesConsejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantesConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
