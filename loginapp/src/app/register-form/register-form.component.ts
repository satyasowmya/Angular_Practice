import { Component } from '@angular/core';
import { IRegister } from './registerForm.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from './registerForm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  

  constructor(
    private registerservice:RegisterService,
    private router:Router
  ){ }

  myEmployee = new IRegister('','','','');

  submitForm(Form:NgForm):void{
    this.registerservice.postEmp(Form.value)
    .subscribe((res:any[]) => {console.log('Form Submitted')})
    this.router.navigate(['/login'],
    {
      queryParams:{
        msg:'Registered successfully' 
      }
    })
  }
}
