import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSocialIconComponent } from './sidebar-social-icon.component';

describe('SidebarSocialIconComponent', () => {
  let component: SidebarSocialIconComponent;
  let fixture: ComponentFixture<SidebarSocialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSocialIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSocialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
