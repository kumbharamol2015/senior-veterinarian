import { Component, OnInit } from '@angular/core';
import { ButtonsConfiguration, PlainGalleryConfiguration } from '../../../shared/data/portfolio';
import { Image, AdvancedLayout } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-grid-four',
  templateUrl: './grid-four.component.html',
  styleUrls: ['./grid-four.component.scss']
})
export class GridFourComponent implements OnInit {

  public galleryFilter: string = 'annual'
  public ButtonsConfig: any = ButtonsConfiguration;
  public GalleryConfig: any = PlainGalleryConfiguration;
  
  public Images;

  public AllImage = [
    new Image(1, { img: 'assets/images/portfolio/grid/1.jpg' }),
    new Image(2, { img: 'assets/images/portfolio/grid/2.jpg' }),
    new Image(3, { img: 'assets/images/portfolio/grid/3.jpg' }),
    new Image(4, { img: 'assets/images/portfolio/grid/4.jpg' }),
    new Image(5, { img: 'assets/images/portfolio/grid/5.jpg' }),
    new Image(6, { img: 'assets/images/portfolio/grid/6.jpg' })
  ];

  public annualFunction = [
    new Image(1, { img: 'assets/images/gallary/annual/1.jpg' }),
    new Image(1, { img: 'assets/images/gallary/annual/2.jpg' }),
    new Image(1, { img: 'assets/images/gallary/annual/3.jpg' }),
    new Image(1, { img: 'assets/images/gallary/annual/4.jpg' }),
    new Image(1, { img: 'assets/images/gallary/annual/5.jpg' })
  ]
  public drDay = [
    new Image(1, { img: 'assets/images/gallary/drday/1.jpg' }),
    new Image(1, { img: 'assets/images/gallary/drday/2.jpg' }),
    new Image(1, { img: 'assets/images/gallary/drday/3.jpg' }),
    new Image(1, { img: 'assets/images/gallary/drday/4.jpg' }),
    new Image(1, { img: 'assets/images/gallary/drday/5.jpg' }),
  ]
  public eggDay = [
    new Image(1, { img: 'assets/images/gallary/eggday/1.jpg' }),
    new Image(1, { img: 'assets/images/gallary/eggday/2.jpg' }),
    new Image(1, { img: 'assets/images/gallary/eggday/3.jpg' }),
    new Image(1, { img: 'assets/images/gallary/eggday/4.jpg' }),
  ]

  public vrundawanCow = [
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/1.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/2.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/5.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/6.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/7.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/8.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/9.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/10.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/11.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/12.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/13.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/14.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/15.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/16.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/17.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/18.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/19.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/20.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/21.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/3.jpg' }),
    new Image(1, { img: 'assets/images/gallary/vrundawanCow/4.jpg' }),
  ]

  public gauravpurskar = [
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/1.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/2.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/3.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/4.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/5.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/6.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/7.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/8.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/9.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/10.jpeg' }),

    new Image(1, { img: 'assets/images/gallary/gauravpurskar/11.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/12.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/13.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/14.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/15.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/16.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/17.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/18.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/19.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/20.jpeg' }),

    new Image(1, { img: 'assets/images/gallary/gauravpurskar/21.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/22.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/23.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/24.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/25.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/26.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/27.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/28.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/29.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/30.jpeg' }),

    new Image(1, { img: 'assets/images/gallary/gauravpurskar/31.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/32.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/33.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/34.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/35.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/36.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/37.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/38.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/39.jpeg' }),
    new Image(1, { img: 'assets/images/gallary/gauravpurskar/40.jpeg' }),
  ]
  
  
  constructor() { }

  ngOnInit(): void {
    this.Images = this.annualFunction
  }

  openImage(image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.Images);
    this.GalleryConfig = Object.assign({}, this.GalleryConfig, { 
        layout: new AdvancedLayout(index, true) 
    });
  }

  getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  filter(term) {
    if(term == 'annual') {
      this.Images = this.annualFunction
    } else if(term == 'drday') {
      this.Images = this.drDay
    } else if(term == 'eggday') {
      this.Images = this.eggDay
    } else if(term == 'vrundawanCow') {
      this.Images = this.vrundawanCow
    } else if(term == 'gauravpurskar') {
      this.Images = this.gauravpurskar
    } 

    this.galleryFilter = term
  }

}
