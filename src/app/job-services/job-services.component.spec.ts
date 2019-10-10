import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobServicesComponent } from './job-services.component';

describe('JobServicesComponent', () => {
  let component: JobServicesComponent;
  let fixture: ComponentFixture<JobServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
