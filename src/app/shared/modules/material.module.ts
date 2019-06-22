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
  MatButtonToggleModule,
  MatDialogModule
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
    MatButtonToggleModule,
    MatDialogModule
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
    MatButtonToggleModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
