import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html'
})
export class UserslistComponent implements OnInit {

  userList:any[] = [];

  constructor(
    private userservice:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userservice.userList()
    .subscribe((res:any[]) => this.userList = res)
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login']);
  }

}
