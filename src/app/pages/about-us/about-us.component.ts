import { Component, OnInit } from '@angular/core';
import { TeamSlider, TestimonialSlider } from '../../shared/data/slider';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient1', '#ff4c3b');
    document.documentElement.style.setProperty('--theme-gradient2', '#203f15');
  }

  public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/testimonial/1.jpg',
    name: 'Amol Kumbhar',
    designation: 'Doctor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  }, {
    image: 'assets/images/testimonial/2.jpg',
    name: 'Bapusaheb',
    designation: 'Doctor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  }, {
    image: 'assets/images/testimonial/1.jpg',
    name: 'Ashish',
    designation: 'Doctor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  }]

  public commitee = [{
    designation: 'Doctor',
    name: 'Ajay',
    mobileNo: 'dfsdf',
  },
  {
    designation: 'Doctor',
    name: 'Ajay',
    mobileNo: 'asdf',
  },
]
  // Team 
  public team = [{
    image: 'assets/images/team/1.jpg',
    name: 'Ajay',
    designation: 'Doctor'
  }, {
    image: 'assets/images/team/2.jpg',
    name: 'Amit',
    designation: 'Doctor'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'Ajit',
    designation: 'Doctor'
  }, {
    image: 'assets/images/team/4.jpg',
    name: 'Arun',
    designation: 'Doctor'
  }, {
    image: 'assets/images/team/3.jpg',
    name: 'Sagar',
    designation: 'Doctor'
 }]

}
