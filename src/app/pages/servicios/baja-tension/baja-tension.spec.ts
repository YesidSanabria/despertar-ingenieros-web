import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaTension } from './baja-tension';

describe('BajaTension', () => {
  let component: BajaTension;
  let fixture: ComponentFixture<BajaTension>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaTension]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaTension);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
