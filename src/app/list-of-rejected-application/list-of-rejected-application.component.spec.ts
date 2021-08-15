import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRejectedApplicationComponent } from './list-of-rejected-application.component';

describe('ListOfRejectedApplicationComponent', () => {
  let component: ListOfRejectedApplicationComponent;
  let fixture: ComponentFixture<ListOfRejectedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfRejectedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRejectedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
