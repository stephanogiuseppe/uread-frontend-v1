import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html'
})
export class ColumnsComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {}
}
