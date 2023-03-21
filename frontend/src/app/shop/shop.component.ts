import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  
})
export class ShopComponent implements OnInit {
  public products: any[] = [];
  constructor(private http: HttpClient) { }

  addToCart(event: any) {
    let productsBefore = sessionStorage.getItem("cart")
    if(!productsBefore?.includes(event.target.id)) {
      if(sessionStorage.getItem("cart")) {
        sessionStorage.setItem("cart", productsBefore + `,` + event.target.id)
      } else sessionStorage.setItem("cart", event.target.id)
    } else return
  }
  
  
  login(): Observable<void> {
    const url = 'http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/product';
    
    this.http.get<any>(url, {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`}}).subscribe(data => {
      if(!data) {
        
      } else {
        this.products = data;
        console.log(this.products);
      }
    });

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 0);
    });
  }

  ngOnInit(): void {
      this.login();
  }
}