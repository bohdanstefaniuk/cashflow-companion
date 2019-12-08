import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeInputComponent } from './outcome.component';

describe('OutcomeComponent', () => {
  let component: OutcomeInputComponent;
  let fixture: ComponentFixture<OutcomeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
