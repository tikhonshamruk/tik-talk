import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{
  myForm : FormGroup 
  router: Router = inject(Router)
  constructor(private authService: AuthService){
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
   
  
  onSubmit() {
    if(this.myForm.valid){
      this.authService.login(this.myForm.value).subscribe(response=>{
        console.log('response', response)
        this.router.navigate([''])
      })
    }
  }
}
