import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';
import { ColumnsService } from 'src/app/shared/services/columns.service';
import { ColumnFormComponent } from './column-form.component';
import { Column } from 'src/app/shared/models/Column.model';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html'
})
export class ColumnsComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  private getColumnsObservable: Subscription;
  public columns: Array<Column>;

  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService,
    private columnService: ColumnsService,
    public dialog: MatDialog
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
    this.getColumns();
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
    this.getColumnsObservable.unsubscribe();
  }

  public getColumns(): void {
    this.getColumnsObservable = this.columnService
      .getColumns()
      .subscribe(columnsRes => {
        this.columns = columnsRes;
      });
  }

  public openAddColumnDialog(): void {
    const dialogRef = this.dialog.open(ColumnFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
