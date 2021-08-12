import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLoanApplicationComponent } from './detail-loan-application.component';

describe('DetailLoanApplicationComponent', () => {
  let component: DetailLoanApplicationComponent;
  let fixture: ComponentFixture<DetailLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLoanApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
