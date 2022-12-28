import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { ClothsComponent } from './cloths/cloths.component';
import { MobileComponent } from './mobile/mobile.component';
import { WatchComponent } from './watches/watch.component';
import { FormalComponent } from './formals/formal.component';

import { HomeService } from '../services/home.service';
import { SharedModule } from "../shared/share.module";

@NgModule({

    declarations:[
        HomeComponent,
        ClothsComponent,
        MobileComponent,
        WatchComponent,
        FormalComponent
    ],
    imports:[
        SharedModule
    ],
    providers:[
        HomeService
    ]

})

export class HomeModule{

}