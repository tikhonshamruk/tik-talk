import { firstValueFrom } from 'rxjs';
import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  fb = inject(FormBuilder);

  profileService = inject(ProfileService)
  myForm= this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    telegramUsername: [{value: '', disabled:true}, Validators.required],
    aboutMe: ['']
  })

  constructor(){
    effect(()=>{
      //@ts-ignore
      this.myForm.patchValue(this.profileService.profileSignal())
    })
  }

  onSave(){
    this.myForm.markAllAsTouched()
    this.myForm.updateValueAndValidity()

    if(this.myForm.invalid) return 

    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.myForm.value))
  }
}
