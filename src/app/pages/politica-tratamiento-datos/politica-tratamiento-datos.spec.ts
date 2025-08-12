import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaTratamientoDatos } from './politica-tratamiento-datos';

describe('PoliticaTratamientoDatos', () => {
  let component: PoliticaTratamientoDatos;
  let fixture: ComponentFixture<PoliticaTratamientoDatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaTratamientoDatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaTratamientoDatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
