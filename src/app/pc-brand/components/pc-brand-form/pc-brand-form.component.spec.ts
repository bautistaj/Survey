import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBrandFormComponent } from './pc-brand-form.component';

describe('PcBrandFormComponent', () => {
  let component: PcBrandFormComponent;
  let fixture: ComponentFixture<PcBrandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcBrandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
