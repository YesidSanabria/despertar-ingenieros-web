import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTension } from './media-tension';

describe('MediaTension', () => {
  let component: MediaTension;
  let fixture: ComponentFixture<MediaTension>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaTension]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaTension);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
