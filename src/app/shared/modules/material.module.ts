import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatMenuModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {}
