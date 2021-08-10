import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDDetailsComponent } from './uddetails.component';

describe('UDDetailsComponent', () => {
  let component: UDDetailsComponent;
  let fixture: ComponentFixture<UDDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UDDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
