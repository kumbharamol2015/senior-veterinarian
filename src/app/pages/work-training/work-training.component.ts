import { Component, OnInit } from '@angular/core';
import { CategorySlider } from 'src/app/shared/data/slider';

@Component({
  selector: 'app-work-training',
  templateUrl: './work-training.component.html',
  styleUrls: ['./work-training.component.scss']
})
export class WorkTrainingComponent implements OnInit {
  public CategorySliderConfig: any = CategorySlider;
  public workTraining: any = [{
    id: 'fabrication',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'fabrication Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'steel',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Steel Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'carpenter',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Carpainter Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'craft',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Craft Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'electric',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Electric Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'art',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Art Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'decoration',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'Decoration Work and Training',
    subHeading: 'Short Note'
  },
  {
    id: 'iti_deploma_eng_ptoj',
    link: '/shop/collection/left/sidebar',
    imgPath: 'assets/images/banner/7.jpg',
    heading: 'ITI, Deploma, Enginnering Project Work and Training',
    subHeading: 'Short Note'
  }]
  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient1', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient2', '#203f15');
  }

}
