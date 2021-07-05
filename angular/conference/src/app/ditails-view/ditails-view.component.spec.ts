import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitailsViewComponent } from './ditails-view.component';

describe('DitailsViewComponent', () => {
  let component: DitailsViewComponent;
  let fixture: ComponentFixture<DitailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DitailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
