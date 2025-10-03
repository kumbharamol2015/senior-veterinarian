import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public url: any;
  public themeLogo: string = 'assets/images/icon/vet.jpg';
  public themeFooterLogo: string = 'assets/images/icon/logo-9.png';
  birthdayUsers = []; // Example birthdate, replace it with your user's birthdate
  todayDate: Date = new Date();
  constructor(private router: Router, private datePipe: DatePipe, private usresService: UsersService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
    this.usresService.getAllUsers().subscribe((data: any) => {
      this.isBirthdayToday(data);
    });
  }

  ngOnInit(): void {
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

}
