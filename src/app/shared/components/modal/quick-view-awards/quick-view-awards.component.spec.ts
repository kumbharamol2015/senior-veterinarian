import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewAwardsComponent } from './quick-view-awards.component';

describe('QuickViewAwardsComponent', () => {
  let component: QuickViewAwardsComponent;
  let fixture: ComponentFixture<QuickViewAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
