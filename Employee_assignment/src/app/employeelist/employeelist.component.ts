import { Component } from '@angular/core';
import { IEmployee } from '../model/employee';

@Component({
    selector: 'app-employee',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeListComponent{

    showEdit:boolean = false;

    emplist:IEmployee[] = [
        {
            employeeId : 1,
            firstName : 'John',
            lastName : 'Smith',
            salary : 10000,
            dob : "Wed Nov 02 1983 07:26:44 GMT-0700(India Standard Time)",
            email : "john@abc.com",
        },
        {
            employeeId : 2,
            firstName : 'Jason',
            lastName : 'Smith',
            salary : 20000,
            dob : "Tue Aug 12 1984 05:26:44 GMT-0700(India Standard Time)",
            email : "jason@abc.com",
        },
        {
            employeeId : 3,
            firstName : 'Amber',
            lastName : 'Dorothy',
            salary : 30000,
            dob : "Fri Apr 05 1985 08:26:44 GMT-0700(India Standard Time)",
            email : "amber@abc.com",
        },
        {
            employeeId : 4,
            firstName : 'Mark',
            lastName : 'Frank',
            salary : 15000,
            dob : "Thu Jun 02 1982 09:26:44 GMT-0700(India Standard Time)",
            email : "mark@abc.com",
        }
    ]

    editEmp(){
        this.showEdit = true;
    }

    updateEmp(){
        this.showEdit = false;
    }

}