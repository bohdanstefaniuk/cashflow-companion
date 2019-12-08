import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeInputComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeInputComponent;
  let fixture: ComponentFixture<IncomeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
