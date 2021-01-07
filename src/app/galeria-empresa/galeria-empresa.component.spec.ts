import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaEmpresaComponent } from './galeria-empresa.component';

describe('GaleriaEmpresaComponent', () => {
  let component: GaleriaEmpresaComponent;
  let fixture: ComponentFixture<GaleriaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
