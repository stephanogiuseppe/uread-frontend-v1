import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { AccessibilityComponent } from './accessibility.component';

@NgModule({
  declarations: [AccessibilityComponent],
  imports: [SharedModule, MaterialModule],
  exports: [AccessibilityComponent]
})
export class AccessibilityModule {}
