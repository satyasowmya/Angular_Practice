import { NgModule } from "@angular/core";

import { ListingComponent } from '../listing/listing.component';
import { RatingComponent } from "../filters/rating.component";
import { CostFilterComponent } from "../filters/costFilter.component";
import { ProdSearchPipe } from '../pipe/searchfilter.pipe';

import { ListingService } from '../services/listing.service';
import { SharedModule } from "../shared/share.module";

@NgModule({
    declarations:[
        ListingComponent,
        ProdSearchPipe,
        RatingComponent,
        CostFilterComponent
    ],
    imports:[
        SharedModule
    ],
    providers:[
        ListingService
    ]

})

export class ListingModule{

}