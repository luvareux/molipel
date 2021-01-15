import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBuscadorComponent } from './campo-buscador.component';

describe('CampoBuscadorComponent', () => {
  let component: CampoBuscadorComponent;
  let fixture: ComponentFixture<CampoBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
