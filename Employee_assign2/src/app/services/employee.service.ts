import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { EmployeeDet } from "../models/employee2";
import { map } from 'rxjs/operators';

@Injectable()

export class EmployeeService{

    private url:string = 'http://dummy.restapiexample.com/api/v1/employees'
    data: EmployeeDet[] = []
    constructor(private http:HttpClient){}

    getEmployeeData(): Observable<EmployeeDet[]>{
       return this.http.get<EmployeeDet[]>(`${this.url}`)
       .pipe(map(response => response));;
    }
    
}