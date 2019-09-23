import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVotoComponent } from './id-voto.component';

describe('IdVotoComponent', () => {
  let component: IdVotoComponent;
  let fixture: ComponentFixture<IdVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
