import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITop,ICloth,IMobile,IWatch,IFormal } from '../models/topStrip.model'

@Injectable()

export class HomeService {
    private url = "https://devflipapi.herokuapp.com"

    constructor(private http: HttpClient){}

    getTopStrip():Observable<ITop[]>{
        return this.http.get<ITop[]>(`${this.url}/topstrip`)
    }

    getCloths():Observable<ICloth[]>{
        return this.http.get<ICloth[]>(`${this.url}/item/cloths?limit=5`)
    }

    getMobile():Observable<IMobile[]>{
        return this.http.get<IMobile[]>(`${this.url}/item/mobile?limit=5`)
    }
    
    getWatch():Observable<IWatch[]>{
        return this.http.get<IWatch[]>(`${this.url}/item/watches?limit=5`)
    }

    getFormal():Observable<IFormal[]>{
        return this.http.get<IFormal[]>(`${this.url}/item/formals?limit=5`)
    }

}