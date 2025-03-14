import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true, // Используем standalone компонент
  imports: [ReactiveFormsModule, CommonModule], // Импортируем необходимые модули
  templateUrl: './login-page.component.html', // Укажите путь к вашему шаблону
  styleUrl: './login-page.component.scss' // Укажите путь к вашим стилям
})

export class LoginPageComponent{
  myForm : FormGroup 
  router: Router = inject(Router)

  passwordVisible = signal(false)

  constructor(private authService: AuthService){
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
   
  // isloading : true | false = true

  // errorMessage : string | null = null
  
  onSubmit() {
    if(this.myForm.valid){
      this.authService.login(this.myForm.value).subscribe(
          {
          next: response => {
            // this.isloading = false; // Сбрасываем состояние загрузки
            console.log(response);
            this.router.navigate(['']); // Перенаправляем после успешного входа
        },
    }
      );
    }
  }
}
