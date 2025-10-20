import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertiRetie } from './certi-retie';

describe('CertiRetie', () => {
  let component: CertiRetie;
  let fixture: ComponentFixture<CertiRetie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertiRetie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertiRetie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
