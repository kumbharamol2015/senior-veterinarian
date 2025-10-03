import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public Users

  constructor(private http: HttpClient) { }
  public getAllUsers(): any {
    return this.http.get<any>('assets/data/users.json').pipe(map(data => data));
  }

  
}
