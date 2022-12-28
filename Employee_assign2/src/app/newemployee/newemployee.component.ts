import { Component, OnInit} from '@angular/core';
import { EmployeeDet } from '../models/employee2';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector:'app-newemployee',
    templateUrl: './newemployee.component.html',
    styleUrls: ['./newemployee.component.css']
})

export class NewEmployee implements OnInit{
    empData:EmployeeDet[] = [];
    constructor(private employeeService:EmployeeService){}
    ngOnInit(): void {
        this.employeeService.getEmployeeData()
        .subscribe((res:EmployeeDet[]) => 
            {
                this.empData = res
                console.log("Data =>",this.empData);
            }
        )
    }
}