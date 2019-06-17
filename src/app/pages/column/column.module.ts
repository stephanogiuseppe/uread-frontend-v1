import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { ColumnComponent } from './column.component';
import { ColumnRoutingModule } from './column-routing.module';
import { ColumnsComponent } from './columns/columns.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [ColumnComponent, ColumnsComponent, PostsComponent],
  imports: [SharedModule, MaterialModule, ColumnRoutingModule]
})
export class ColumnModule {}
