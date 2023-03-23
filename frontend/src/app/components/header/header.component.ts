import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private common:CommonService) { }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  totalvalue:any;

  ngOnInit(): void {
    this.common.totalSubject.subscribe((totalvalue:any)=>{
      console.log(" got"  + totalvalue)
      this.totalvalue=totalvalue
    })
  }
}