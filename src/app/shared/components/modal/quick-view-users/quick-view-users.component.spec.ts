import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewUsersComponent } from './quick-view-users.component';

describe('QuickViewUsersComponent', () => {
  let component: QuickViewUsersComponent;
  let fixture: ComponentFixture<QuickViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
