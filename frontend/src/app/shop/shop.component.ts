import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  
})
export class ShopComponent implements OnInit {
  public products: any[] = [];
  constructor(private common:CommonService) { }

  
  ngOnInit(): void {
    this.common.getProducts().subscribe((res:any )=> {
      this.products = res;
      console.log('data response', this.products);
    });
}

  addToCart(event: any) {
    let productsBefore = sessionStorage.getItem("cart")
    if(!productsBefore?.includes(event.target.id)) {
      if(sessionStorage.getItem("cart")) {
        sessionStorage.setItem("cart", productsBefore + `,` + event.target.id)
      } else sessionStorage.setItem("cart", event.target.id)
    } else return
  }
  
  

}