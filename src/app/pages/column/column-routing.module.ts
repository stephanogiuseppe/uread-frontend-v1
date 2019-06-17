import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColumnComponent } from './column.component';

const routes: Routes = [{ path: '', component: ColumnComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnRoutingModule {}
