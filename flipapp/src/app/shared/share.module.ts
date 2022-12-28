import { NgModule } from "@angular/core";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MyupperPipe } from '../pipe/myupper.pipe';


@NgModule({
    declarations: [
        MyupperPipe
    ],
    imports:[
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],
    providers:[],
    exports:[
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        MyupperPipe
    ]
})

export class SharedModule{

}