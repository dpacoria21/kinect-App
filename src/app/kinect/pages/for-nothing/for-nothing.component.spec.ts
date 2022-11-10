import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNothingComponent } from './for-nothing.component';

describe('ForNothingComponent', () => {
  let component: ForNothingComponent;
  let fixture: ComponentFixture<ForNothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForNothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForNothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
