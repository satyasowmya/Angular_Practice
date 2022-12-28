import { Component } from '@angular/core';
import { IUser } from './form.model';
import { NgForm } from '@angular/forms';
import { FormsService } from './form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  constructor(private formService:FormsService,private router: Router) { }

  language:string[] = ['Node','Angular','React','Javascript'];
  hasCodeLangError:boolean = false;
  myEmployee = new IUser('Sowmya','Madala','sowmya@mail.com','12345678','Node');

  firstToUpper(value:string):void{
    if(value.length>0){
      value = value.trim();
      this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
    }else{
      this.myEmployee.firstName = value;
    }
  }

  validateCodeLang():void{
    if(this.myEmployee.clang === 'default'){
      this.hasCodeLangError= true;
    }else{
      this.hasCodeLangError = false;
    }
  }

  showPassword(event:Event):void{
    let inputType = (event.target as HTMLInputElement).type;
    if(inputType === 'password'){
      (event.target as HTMLInputElement).type = 'text'
    }else{
      (event.target as HTMLInputElement).type = 'password'
    }
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.formService.postEmp(Form.value)
    .subscribe((res:any[]) => {console.log('Form Submitted')})
    this.router.navigate(['/confirm'])
  }

}
