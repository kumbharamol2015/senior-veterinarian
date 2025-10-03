import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { ButtonsConfiguration, PlainGalleryConfiguration } from 'src/app/shared/data/portfolio';
import { Image, AdvancedLayout } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-13.png'; // Change Logo

  public products: Product[] = [];
  birthdayUsers = []

  public ProductSliderConfig: any = ProductSlider;


  selectedWebinar: number = 1; // Default to Webinar 1
  webinarTitle: string = 'Webinar 1';
  webinarSubtitle: string = 'Expanding opportunities and prospectus for veterinarians';
  webinarDescription: string = 'On the occasion of Maharashtra veterinary day we arranged the webinar on Expanding opportunities and prospects for Veterinarians and the speaker was retired IAS and special advisor to Hon. CM Maharashtra, Dr. Deepak Mhaisekar and we are proud that he is a veterinarian too.';



  constructor(public productService: ProductService, private usresService: UsersService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'pets');
    });
    this.usresService.getAllUsers().subscribe((data: any) => {
      this.isBirthdayToday(data);
    });
  }

  showWebinarInfo(webinarNumber: number) {
    this.selectedWebinar = webinarNumber;
    // Update the webinar details based on the selected webinar
    switch (webinarNumber) {
      case 1:
        this.webinarTitle = 'Webinar 1';
        this.webinarSubtitle = 'Expanding opportunities and prospectus for veterinarians';
        this.webinarDescription = 'On the occasion of Maharashtra veterinary day we arranged the webinar on Expanding opportunities and prospects for Veterinarians and the speaker was retired IAS and special advisor to Hon. CM Maharashtra, Dr. Deepak Mhaisekar and we are proud that he is a veterinarian too.';
        break;
      case 2:
        this.webinarTitle = 'Webinar 2';
        this.webinarSubtitle = 'Webinar 2 Subtitle';
        this.webinarDescription = 'Webinar 2 Description';
        break;
      case 3:
        this.webinarTitle = 'Technical Seminar';
        this.webinarSubtitle = 'Technical Seminar Subtitle';
        this.webinarDescription = 'Technical Seminar Description';
        break;
      case 4:
        this.webinarTitle = 'Work Camp';
        this.webinarSubtitle = 'Work Camp Subtitle';
        this.webinarDescription = 'Work Camp Description';
        break;
      default:
        break;
    }
  }

  isBirthdayToday(data): any {
    data.forEach((element) => {
      console.log(element)
      const userBirthday = new Date(element.birthdate);
      const today = new Date();
      if (
        userBirthday.getMonth() === today.getMonth() &&
        userBirthday.getDate() === today.getDate()
      ) {
        this.birthdayUsers.push(element.name)
      }
    });

  }

  public awards: any = [{
    'images': {
      'src': 'assets/images/award/award1.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 1',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award2.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award3.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award4.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award5.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award6.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award7.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  },
  {
    'images': {
      'src': 'assets/images/award/award8.jpg',
      'alt': 'Dr'
    },
    'name': 'Award 2',
    'details': 'Detail 2',
  }];

  public sliders = [{
    // title: 'We Believe',
    // subTitle: 'that being a veterinarian is more than just a job.',
    image: 'assets/images/slider/11.jpg'
  }, {
    // title: 'We Believe',
    // subTitle: 'that being a veterinarian is more than just a job.',
    image: 'assets/images/slider/12.jpg'
  }, {
    // title: 'We Believe',
    // subTitle: 'that being a veterinarian is more than just a job.',
    image: 'assets/images/slider/13.jpg'
  }, {
    // title: 'We Believe',
    // subTitle: 'that being a veterinarian is more than just a job.',
    image: 'assets/images/slider/14.jpg'
  }, {
    image: 'assets/images/slider/15.jpg'
  }, {
    image: 'assets/images/slider/16.jpg'
  }];

  // Logo
  public logos = [{
    image: 'assets/images/logos/9.png',
  }, {
    image: 'assets/images/logos/10.png',
  }, {
    image: 'assets/images/logos/11.png',
  }, {
    image: 'assets/images/logos/12.png',
  }, {
    image: 'assets/images/logos/13.png',
  }, {
    image: 'assets/images/logos/14.png',
  }, {
    image: 'assets/images/logos/15.png',
  }, {
    image: 'assets/images/logos/16.png',
  }]

  // Collection banner
  public collections1 = [{
    image: 'assets/images/collection/pets/1.jpg',
    title: 'Clothes'
  },
  {
    image: 'assets/images/collection/pets/2.jpg',
    title: 'Groom'
  },
  {
    image: 'assets/images/collection/pets/3.jpg',
    title: 'food'
  }];

  public collections2 = [{
    image: 'assets/images/collection/pets/4.jpg',
    title: 'Home'
  },
  {
    image: 'assets/images/collection/pets/5.jpg',
    title: 'cats'
  },
  {
    image: 'assets/images/collection/pets/6.jpg',
    title: 'bowls'
  }];

  // Blog
  public blogs = [{
    image: 'assets/images/blog/24.jpg',
    date: '10 January 2024',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    details: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit',
    by: 'Amol K.'
  }, {
    image: 'assets/images/blog/25.jpg',
    date: '10 January 2024',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    details: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit',
    by: 'Amol K.'
  }, {
    image: 'assets/images/blog/26.jpg',
    date: '10 January 2024',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    details: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit',
    by: 'Amol K.'
  }, {
    image: 'assets/images/blog/27.jpg',
    date: '10 January 2024',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    details: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit',
    by: 'Amol K.'
  }];

  

  public galleryFilter: string = 'all'
  public ButtonsConfig: any = ButtonsConfiguration;
  public GalleryConfig: any = PlainGalleryConfiguration;

  public Images;

  public AllImage = [
    new Image(1, { img: 'assets/images/award/award1.jpg' }),
    new Image(2, { img: 'assets/images/award/award2.jpg' }),
    new Image(3, { img: 'assets/images/award/award3.jpg' }),
    new Image(4, { img: 'assets/images/award/award4.jpg' }),
    new Image(5, { img: 'assets/images/award/award5.jpg' }),
    new Image(6, { img: 'assets/images/award/award6.jpg' }),
    new Image(7, { img: 'assets/images/award/award7.jpg' }),
    new Image(8, { img: 'assets/images/award/award8.jpg' })
  ];

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


  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#ff9944');
    this.Images = this.AllImage
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
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
    if(term == 'all') {
      this.Images = this.AllImage
    } else if(term == 'fashion') {
      this.Images = this.FashionImage
    } else if(term == 'bags') {
      this.Images = this.BagImages
    } else if(term == 'shoes') {
      this.Images = this.ShoesImages
    } else if(term == 'watch') {
      this.Images = this.WatchImages
    }

    this.galleryFilter = term
  }

}
