import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {
  public ceremonys: any = [{
    id: 'marriage',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Marriage Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'birthday',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Birthday Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'naming',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Naming Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'baby_shower',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Baby Shower Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'opening',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Opening Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'ganesh_fastival',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Ganesh Fastival Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'miravnuk',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Miravnuk Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'marathi_festival',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Marathi Festival Ceremony',
    subHeading: 'Short Note'
  },
  {
    id: 'cultural_entertainment',
    link: '/pages/ceremony-details',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Cultural Entertainment Ceremony',
    subHeading: 'Short Note'
  }]
  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient1', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient2', '#203f15');
  }

}
