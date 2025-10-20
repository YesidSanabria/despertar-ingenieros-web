import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPrev } from './mantenimiento-prev';

describe('MantenimientoPrev', () => {
  let component: MantenimientoPrev;
  let fixture: ComponentFixture<MantenimientoPrev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoPrev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoPrev);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
