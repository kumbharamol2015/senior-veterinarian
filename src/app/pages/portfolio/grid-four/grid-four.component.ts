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

  public FashionImage = [
    new Image(1, { img: 'assets/images/portfolio/grid/1.jpg' })
  ]

  public BagImages = [
    new Image(3, { img: 'assets/images/portfolio/grid/3.jpg' }),
    new Image(4, { img: 'assets/images/portfolio/grid/4.jpg' }),
    new Image(7, { img: 'assets/images/portfolio/grid/7.jpg' }),
  ];
  
  public ShoesImages = [
    new Image(2, { img: 'assets/images/portfolio/grid/2.jpg' }),
    new Image(8, { img: 'assets/images/portfolio/grid/8.jpg' })
  ]
  
  public WatchImages = [
    new Image(5, { img: 'assets/images/portfolio/grid/5.jpg' }),
    new Image(6, { img: 'assets/images/portfolio/grid/6.jpg' })
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
    } else if(term == 'shoes') {
      this.Images = this.ShoesImages
    } else if(term == 'watch') {
      this.Images = this.WatchImages
    }

    this.galleryFilter = term
  }

}
