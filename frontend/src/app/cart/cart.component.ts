import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  
})
export class cartComponent implements OnInit {
  public fetchedItems: any[] = [];
  constructor(private http: HttpClient) { }
  
  public checkout() {
    let ordersBefore = localStorage.getItem("orders")

    const newOrder: {} = {
      id: Math.floor(Math.random() * 101),
      date: Date(),
      status: true
    }
    
    if(ordersBefore) {
        localStorage.setItem("orders", ordersBefore + ',' + JSON.stringify(newOrder))
        sessionStorage.removeItem("cart")
    } else {
      localStorage.setItem("orders", JSON.stringify(newOrder))
      sessionStorage.removeItem("cart")
    }
  }
  
  cart(): Observable<void> {
    const itemsInCart = sessionStorage.getItem("cart")?.split(",")
    const url = 'http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/product/';
    
    itemsInCart?.forEach(item => {
      this.http.get<any>(url + item , {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`}}).subscribe(data => {
        this.fetchedItems.push(data)
      })
    })

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 0);
    });
  }

  ngOnInit(): void {
      this.cart();
  }
}