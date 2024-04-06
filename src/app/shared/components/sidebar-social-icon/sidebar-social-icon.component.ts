import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-social-icon',
  templateUrl: './sidebar-social-icon.component.html',
  styleUrls: ['./sidebar-social-icon.component.scss']
})
export class SidebarSocialIconComponent implements OnInit {
  public show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
