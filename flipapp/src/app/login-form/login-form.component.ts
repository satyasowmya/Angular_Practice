import { Component,OnInit } from '@angular/core';
import { ILogin,LoginRes,UserRes } from '../models/loginForm.model';
import { NgForm} from '@angular/forms';
import { LoginFormService } from '../services/login.service';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{ 
  loginError:string='';

  constructor(
    private loginFormService:LoginFormService,
    private router:ActivatedRoute,
    private route: Router
    ) { }

  myEmployee = new ILogin('sowmya@gmail.com','123456');
  msg:string|null = '';
  ngOnInit():void{
    this.msg = this.router.snapshot.queryParamMap.get('msg')
  }
 
  submitForm(Form:NgForm):void{
    this.loginFormService.loginUser(Form.value)
    .subscribe((res:LoginRes) => {
      this.loginError = '';
      this.loginFormService.getUserInfo(res['token'])
      .subscribe((response:UserRes) => (this.validateUser(response['role'],response['name'],response['email'],response['phone'])))
    },
      (err:any[])=>{
        this.loginError = "Please enter correct Details"
      }
    )
  }

  validateUser(roleType:string,name:string,email:string,phone:string):void{
    let userResponse = `${roleType},${name},${email},${phone}`
    sessionStorage.setItem('userResponse',userResponse)
    localStorage.setItem('Role_Type',roleType)
    this.route.navigate(['/'])
  }

}
