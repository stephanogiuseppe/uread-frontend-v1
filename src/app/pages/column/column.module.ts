import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { ColumnComponent } from './column.component';
import { ColumnRoutingModule } from './column-routing.module';
import { ColumnsComponent } from './columns/columns.component';
import { PostsComponent } from './posts/posts.component';
import { ColumnFormComponent } from './columns/column-form.component';
import { PostsFormComponent } from './posts/post-form.component';

@NgModule({
  declarations: [
    ColumnComponent,
    ColumnsComponent,
    PostsComponent,
    ColumnFormComponent,
    PostsFormComponent
  ],
  imports: [SharedModule, MaterialModule, ColumnRoutingModule],
  entryComponents: [ColumnFormComponent, PostsFormComponent]
})
export class ColumnModule {}
