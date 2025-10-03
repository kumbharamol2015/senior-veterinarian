import { Component, OnInit, ViewChild } from '@angular/core';
import { QuickViewUsersComponent } from 'src/app/shared/components/modal/quick-view-users/quick-view-users.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @ViewChild("quickViewUsers") QuickViewUsers: QuickViewUsersComponent;
  public users: any = [{
    'images': {
      'src': 'assets/images/team/1.jpg',
      'alt': 'Dr'
    },
    'name': 'Amol Kumbhar',
    'email': 'kumbharamol22@gmailcom',
    'designation': 'Developer',
    'mobileNo': '9021121050',
    'birthdate': '10-01-1089',
    'address': 'Pune'
  },
  {
    'images': {
      'src': 'assets/images/team/1.jpg',
      'alt': 'Dr'
    },
    'name': 'Bapusaheb Nalawade',
    'email': 'bapu@gmailcom',
    'designation': 'Developer',
    'mobileNo': '1231231231',
    'birthdate': '06-04-1089',
    'address': 'Aurangabad'
  }];


  ngOnInit(): void {
  }

}
