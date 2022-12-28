import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IFormal } from 'src/app/models/topStrip.model';
import { HomeService } from 'src/app/services/home.service';



@Component({
    selector: 'app-formal',
    templateUrl: './formal.component.html',
    styleUrls: ['./formal.component.css']
})

export class FormalComponent implements OnInit{

    constructor(private homeService:HomeService){}

    formals:IFormal[] = []

    ngOnInit(): void {
        this.homeService.getFormal()
        .subscribe((data:IFormal[]) => this.formals = data)
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