import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcBrandComponent } from './pc-brand.component';

describe('PcBrandComponent', () => {
  let component: PcBrandComponent;
  let fixture: ComponentFixture<PcBrandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
