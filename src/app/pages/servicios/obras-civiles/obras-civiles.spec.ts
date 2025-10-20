import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasCiviles } from './obras-civiles';

describe('ObrasCiviles', () => {
  let component: ObrasCiviles;
  let fixture: ComponentFixture<ObrasCiviles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasCiviles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrasCiviles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
