import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [SharedModule, MaterialModule],
  exports: [NavBarComponent]
})
export class NavBarModule {}
