import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignInComponent, SignUpComponent],
  imports: [SharedModule, MaterialModule],
  exports: [LoginComponent]
})
export class LoginModule {}
