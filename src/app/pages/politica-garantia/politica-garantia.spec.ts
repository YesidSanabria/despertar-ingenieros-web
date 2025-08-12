import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaGarantia } from './politica-garantia';

describe('PoliticaGarantia', () => {
  let component: PoliticaGarantia;
  let fixture: ComponentFixture<PoliticaGarantia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaGarantia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaGarantia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
