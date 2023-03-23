import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/product';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalSubject = new Subject()
   
  constructor(private http: HttpClient) { }
  public getProducts(): Observable<any> {
    return this.http.get(API_URL,{headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`}})
    .pipe(map(res => res));
  }
  public sendTotal(totalVal:any) { 
    this.totalSubject.next(totalVal);
  }
}
