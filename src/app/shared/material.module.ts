import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
