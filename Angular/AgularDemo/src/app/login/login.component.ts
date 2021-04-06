import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './IUser';

function ageRangeValidator(min:number,max:number):ValidatorFn{
  return (control : AbstractControl):{[key:string]: boolean} | null => 
    {
      if(control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)){
        return {"ageRange":true}
      }
      return null;
    }
}
// default function with hard code(18, 45) to pass parameters
// function ageRangeValidator(control : AbstractControl):{[key:string]: boolean} | null {
//   if(control.value !== undefined && (isNaN(control.value) || control.value <18 || control.value > 45)){
//     return {"ageRange":true}
//   }
//   return null;
// }
// use in formgroup
// age: new FormControl(null, [ ageRangeValidator ])

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }
  loginForm : FormGroup;
  user : IUser = {
    email : 'demo@email.com',
    password : 'password'
  }
  minAge = 18;
  maxAge = 45;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [ ageRangeValidator( this.minAge, this.maxAge) ]),
      phonenumber: new FormControl(null, []),
      notification: new FormControl('email', [])
    });

    this.formControlValueChanged();
  }
  login(){
    console.log(this.loginForm.value);
  }
  reset(){
    this.loginForm.reset();
  }
  formControlValueChanged(){
    const phoneControl = this.loginForm.get('phonenumber');
    this.loginForm.get('notification')?.valueChanges.subscribe(
      (data:string)=>{
        if (data === 'phone'){
          phoneControl?.setValidators([Validators.required]);
        }
        else if (data === 'email'){
          phoneControl?.clearValidators();
        }
        phoneControl?.updateValueAndValidity();
      }
    )
  }


  
}
