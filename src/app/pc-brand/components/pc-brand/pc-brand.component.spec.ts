import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBrandComponent } from './pc-brand.component';

describe('PcBrandComponent', () => {
  let component: PcBrandComponent;
  let fixture: ComponentFixture<PcBrandComponent>;

  beforeEach(async(() => {
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
