import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

import { MiniColumnComponent } from '../components/column/mini-column/mini-column.component';
import { MiniPostComponent } from '../components/post/mini-post/mini-post.component';
import { FullPostComponent } from '../components/post/full-post/full-post.component';
import { ModalRightComponent } from '../components/modal-right/modal-right.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const translateOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right'
    },
    vertical: {
      position: 'bottom'
    }
  }
};

@NgModule({
  declarations: [
    MiniPostComponent,
    FullPostComponent,
    ModalRightComponent,
    MiniColumnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot(translateOptions),
    NotifierModule.withConfig(customNotifierOptions)
  ],
  exports: [
    MiniPostComponent,
    FullPostComponent,
    ModalRightComponent,
    MiniColumnComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    NotifierModule
  ],
  providers: [DatePipe]
})
export class SharedModule {}
