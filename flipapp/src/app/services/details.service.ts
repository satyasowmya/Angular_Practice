import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class DetailService{
    private url = "https://devflipapi.herokuapp.com";
    //https://devflipapi.herokuapp.com/item/cloths?itemId=12

    constructor(private http:HttpClient){ }
    getDetails(catName:string|null,id:number):Observable<any[]>{
        return this.http.get<any[]>(`${this.url}/item/${catName}?itemId=${id}`)
    }
}