import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayColComponent } from './day-col.component';

describe('DayColComponent', () => {
  let component: DayColComponent;
  let fixture: ComponentFixture<DayColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
