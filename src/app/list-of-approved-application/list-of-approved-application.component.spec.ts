import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfApprovedApplicationComponent } from './list-of-approved-application.component';

describe('ListOfApprovedApplicationComponent', () => {
  let component: ListOfApprovedApplicationComponent;
  let fixture: ComponentFixture<ListOfApprovedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfApprovedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfApprovedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
