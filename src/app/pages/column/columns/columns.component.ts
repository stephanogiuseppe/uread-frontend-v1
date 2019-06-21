import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html'
})
export class ColumnsComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use(this.changeTranslateService.currentLanguage);

    this.translateServiceObservable = this.changeTranslateService.language$.subscribe(
      (language: string) => {
        translate.use(language);
      }
    );
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
  }
}
