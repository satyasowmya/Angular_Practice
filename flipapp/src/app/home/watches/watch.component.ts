import { Component,OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IWatch } from 'src/app/models/topStrip.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: 'app-watch',
    templateUrl: './watch.component.html',
    styleUrls: ['./watch.component.css']
})

export class WatchComponent implements OnInit{

    constructor(private homeService:HomeService){}

    watches:IWatch[] = []

    ngOnInit(): void {
        this.homeService.getWatch()
        .subscribe((data:IWatch[]) => this.watches = data)
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