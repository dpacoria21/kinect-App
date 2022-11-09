import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatedComponent } from './verificated.component';

describe('VerificatedComponent', () => {
  let component: VerificatedComponent;
  let fixture: ComponentFixture<VerificatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
