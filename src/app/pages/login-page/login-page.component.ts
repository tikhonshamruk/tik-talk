import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{
  myForm : FormGroup 

  constructor(){
    this.myForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null)
    });
  }
   
  
  onSubmit() {
    console.log(this.myForm?.value)
  }
}
