import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient1', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient2', '#203f15');
  }

}
