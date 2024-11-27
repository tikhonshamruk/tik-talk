import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
   
  isloading : true | false = true

  errorMessage : string | null = null
  
  onSubmit() {
    if(this.myForm.valid){
      // this.authService.login(this.myForm.value).subscribe(response=>{
      //   console.log(response)
      //   this.router.navigate([''])
      // })
      this.isloading = true; // Устанавливаем состояние загрузки
      this.authService.login(this.myForm.value).subscribe(
          response => {
              this.isloading = false; // Сбрасываем состояние загрузки
              console.log(response)
              this.router.navigate(['']); // Перенаправляем после успешного входа
          },
          error => {
              this.isloading = false; // Сбрасываем состояние загрузки
              console.log(error)
              this.errorMessage = 'Произошла ошибка при входе. Пожалуйста, проверьте данные.'; // Уведомление об ошибке
          }
      );
    }
  }
}
