import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  fb = inject(FormBuilder);
  myForm= this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    telegramUsername: [{value: '', disabled:true}, Validators.required],
    aboutMe: ['']
  })
}
