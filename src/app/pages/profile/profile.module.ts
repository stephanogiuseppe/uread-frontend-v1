import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, MaterialModule, ProfileRoutingModule]
})
export class ProfileModule {}
