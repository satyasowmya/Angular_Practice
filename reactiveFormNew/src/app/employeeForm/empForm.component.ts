import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup | undefined;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]]
    })
  }

}
