import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCornerComponent } from './member-corner.component';

describe('MemberCornerComponent', () => {
  let component: MemberCornerComponent;
  let fixture: ComponentFixture<MemberCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
