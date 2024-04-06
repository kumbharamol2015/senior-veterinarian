import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTrainingComponent } from './work-training.component';

describe('WorkTrainingComponent', () => {
  let component: WorkTrainingComponent;
  let fixture: ComponentFixture<WorkTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
