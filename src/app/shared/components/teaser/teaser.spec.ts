import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaser } from './teaser';

describe('Teaser', () => {
  let component: Teaser;
  let fixture: ComponentFixture<Teaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teaser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
