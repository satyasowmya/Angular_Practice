import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';

@Component({
   // selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit{

    itemType:string = '';
    catData:any[]= []
    userInput:string= '';
    filterText:string='Rating Filter';
    filterCostText:string = 'Cost Filter';

    constructor(private route:ActivatedRoute,
        private listingService:ListingService){}

    ngOnInit(): void {
        this.itemType = this.route.snapshot.params['item']
        this.listingService.getDataWrtC(this.itemType)
        .subscribe((data:any[]) => this.catData = data)
    }

    dataReceive(ratingVal:string){
        console.log("Selected>>>", ratingVal)
        this.listingService.getDataWrtR(ratingVal,this.itemType)
        .subscribe((data:any[]) => {
            this.catData = data
        })
    }

    costReceive(costVal:string){
        let lcost = Number(costVal.split('-')[0])
        let hcost = Number(costVal.split('-')[1])
        console.log("Selected>>>", costVal)
        this.listingService.getDataWrtP(lcost,hcost,this.itemType)
        .subscribe((data:any[]) => this.catData = data)
        
    }


}