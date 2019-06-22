import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';
import { ColumnsService } from 'src/app/shared/services/columns.service';

@Component({
  selector: 'app-column-form',
  templateUrl: 'column-form.component.html'
})
export class ColumnFormComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  private createColumnObservable: Subscription;
  public columnForm: FormGroup;

  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService,
    private columnService: ColumnsService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use(this.changeTranslateService.currentLanguage);

    this.translateServiceObservable = this.changeTranslateService.language$.subscribe(
      (language: string) => {
        translate.use(language);
      }
    );
  }

  public ngOnInit(): void {
    this.columnForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
    this.createColumnObservable.unsubscribe();
  }

  public createColumn(): void {
    const column = { ...this.columnForm.value };
    this.createColumnObservable = this.columnService
      .createColumn(column)
      .subscribe(columnRes => {
        console.log(columnRes);
      });
  }
}
