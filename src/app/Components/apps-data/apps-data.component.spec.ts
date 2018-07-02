import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsDataComponent } from './apps-data.component';

describe('AppsDataComponent', () => {
  let component: AppsDataComponent;
  let fixture: ComponentFixture<AppsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
