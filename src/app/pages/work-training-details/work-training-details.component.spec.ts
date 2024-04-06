import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTrainingDetailsComponent } from './work-training-details.component';

describe('WorkTrainingDetailsComponent', () => {
  let component: WorkTrainingDetailsComponent;
  let fixture: ComponentFixture<WorkTrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTrainingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
