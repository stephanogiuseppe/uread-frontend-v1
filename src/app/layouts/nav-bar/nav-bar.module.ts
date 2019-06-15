import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [SharedModule],
  exports: [NavBarComponent]
})
export class NavBarModule {}
