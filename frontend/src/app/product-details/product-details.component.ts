import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  
})
export class ProductDetailsComponent implements OnInit {
  constructor(private common:CommonService) { }
  cartValue:any;
 
  ngOnInit(): void {
  }

  addToCart(value:any){
    console.log("value",value);
    if (value !== 0) {
      this.common.sendTotal(value);
    }
    }
} 