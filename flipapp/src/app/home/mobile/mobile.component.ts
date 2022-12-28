import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IMobile } from 'src/app/models/topStrip.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls:['./mobile.component.css']
})


export class MobileComponent implements OnInit{

  constructor(private homeService:HomeService){}

    mobiles:any[]=[]

    ngOnInit(): void {
      this.homeService.getMobile()
      .subscribe((data:IMobile[]) => this.mobiles = data)
    }


    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 4
          }
        },
        nav: true
      }
}