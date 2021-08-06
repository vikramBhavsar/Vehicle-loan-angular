import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibityCheckComponent } from './eligibity-check.component';

describe('EligibityCheckComponent', () => {
  let component: EligibityCheckComponent;
  let fixture: ComponentFixture<EligibityCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibityCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
