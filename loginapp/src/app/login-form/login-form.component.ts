import { Component,OnInit } from '@angular/core';
import { ILogin,LoginRes,UserRes } from './loginForm.model';
import { NgForm} from '@angular/forms';
import { LoginFormService } from './login.service';
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

  myEmployee = new ILogin('','');
  msg:string|null = '';
  ngOnInit():void{
    this.msg = this.router.snapshot.queryParamMap.get('msg')
  }
 
  submitForm(Form:NgForm):void{
    this.loginFormService.loginUser(Form.value)
    .subscribe((res:LoginRes) => {
      this.loginError = '';
      this.loginFormService.getUserInfo(res['token'])
      .subscribe((response:UserRes) => (this.validateUser(response['role'])))
    },
      (err:any[])=>{
        this.loginError = "Please enter correct Details"
      }
    )
  }

  validateUser(roleType:string):void{
    localStorage.setItem('Role_Type',roleType)
    this.route.navigate(['/profile'])
  }

}
