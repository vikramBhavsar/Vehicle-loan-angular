import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLoanApplicationComponent } from './list-of-loan-application.component';

describe('ListOfLoanApplicationComponent', () => {
  let component: ListOfLoanApplicationComponent;
  let fixture: ComponentFixture<ListOfLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfLoanApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
