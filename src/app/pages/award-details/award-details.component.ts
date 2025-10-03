import { Component, OnInit, ViewChild } from '@angular/core';
import { QuickViewAwardsComponent } from 'src/app/shared/components/modal/quick-view-awards/quick-view-awards.component';

@Component({
  selector: 'app-award-details',
  templateUrl: './award-details.component.html',
  styleUrls: ['./award-details.component.scss']
})
export class AwardDetailsComponent  implements OnInit {
  @ViewChild("quickViewAwards") QuickViewAwards: QuickViewAwardsComponent;

  selectedAward: any = [];
  public awards2008 = [{
    'images': {
      'src': 'assets/images/award/2008/award1.jpg',
      'alt': 'Dr'
    },
    'year': '2008',
    'name': 'Award 1',
    'details': 'Detail 1',
  },
  {
    'images': {
      'src': 'assets/images/award/2008/award2.jpg',
      'alt': 'Dr'
    },
    'year': '2008',
    'name': 'Award 1',
    'details': 'Detail 1',
  },
  {
    'images': {
      'src': 'assets/images/award/2008/award3.jpg',
      'alt': 'Dr'
    },
    'year': '2008',
    'name': 'Award 1',
    'details': 'Detail 1',
  },
  {
    'images': {
      'src': 'assets/images/award/2008/award4.jpg',
      'alt': 'Dr'
    },
    'year': '2008',
    'name': 'Award 1',
    'details': 'Detail 1',
  },
];

  public awards2010: any = [
  {
    'images': {
      'src': 'assets/images/award/2010/award1.jpg',
      'alt': 'Dr'
    },
    'year': '2010',
    'name': 'Award 3',
    'details': 'Detail 3',
  },
  {
    'images': {
      'src': 'assets/images/award/2010/award2.jpg',
      'alt': 'Dr'
    },
    'year': '2010',
    'name': 'Award 3',
    'details': 'Detail 3',
  },
  {
    'images': {
      'src': 'assets/images/award/2010/award3.jpg',
      'alt': 'Dr'
    },
    'year': '2010',
    'name': 'Award 3',
    'details': 'Detail 3',
  },
  {
    'images': {
      'src': 'assets/images/award/2010/award4.jpg',
      'alt': 'Dr'
    },
    'year': '2010',
    'name': 'Award 3',
    'details': 'Detail 3',
  }];

  public awards2012: any = [
    {
      'images': {
        'src': 'assets/images/award/2012/award1.jpg',
        'alt': 'Dr'
      },
      'year': '2012',
      'name': 'Award 4',
      'details': 'Detail 4',
    },
    {
      'images': {
        'src': 'assets/images/award/2012/award2.jpg',
        'alt': 'Dr'
      },
      'year': '2012',
      'name': 'Award 4',
      'details': 'Detail 4',
    },
    {
      'images': {
        'src': 'assets/images/award/2012/award3.jpg',
        'alt': 'Dr'
      },
      'year': '2012',
      'name': 'Award 4',
      'details': 'Detail 4',
    },
    {
      'images': {
        'src': 'assets/images/award/2012/award4.jpg',
        'alt': 'Dr'
      },
      'year': '2012',
      'name': 'Award 4',
      'details': 'Detail 4',
    }];
    public awards2017: any = [
      {
        'images': {
          'src': 'assets/images/award/2017/award1.jpg',
          'alt': 'Dr'
        },
        'year': '2017',
        'name': 'Award 5',
        'details': 'Detail 5',
      }, {
        'images': {
          'src': 'assets/images/award/2017/award2.jpg',
          'alt': 'Dr'
        },
        'year': '2017',
        'name': 'Award 5',
        'details': 'Detail 5',
      }, {
        'images': {
          'src': 'assets/images/award/2017/award3.jpg',
          'alt': 'Dr'
        },
        'year': '2017',
        'name': 'Award 5',
        'details': 'Detail 5',
      },];

      
    public awards2018: any = [
      {
        'images': {
          'src': 'assets/images/award/2018/award1.jpg',
          'alt': 'Dr'
        },
        'year': '2018',
        'name': 'Award 8',
        'details': 'Detail 8',
      },];
    public awards2019: any = [
      {
        'images': {
          'src': 'assets/images/award/2019/award1.jpg',
          'alt': 'Dr'
        },
        'year': '2019',
        'name': 'Award 3',
        'details': 'Detail 3',
      },];
    public awards2020: any = [
      {
        'images': {
          'src': 'assets/images/award/2020/award1.jpg',
          'alt': 'Dr'
        },
        'year': '2020',
        'name': 'Award 7',
        'details': 'Detail 7',
      },];
  ngOnInit(): void {
  }

  sorting(term) {
    console.log(term)
      if(term == '2008') {
        console.log(term)
        this.selectedAward = [...this.awards2008];
        console.log(this.selectedAward)
      } else if(term == '2010') {
        this.selectedAward = this.awards2010
      } else if(term == '2012') {
        this.selectedAward = this.awards2012
      } else if(term == '2017') {
        this.selectedAward = this.awards2017
      } else if(term == '2018') {
        this.selectedAward = this.awards2018
      } 
      else if(term == '2019') {
        this.selectedAward = this.awards2019
      }  else if(term == '2020') {
        this.selectedAward = this.awards2020
      } 
    }
  }