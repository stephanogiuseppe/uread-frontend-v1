import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class ChangeTranslateService {
  private language = new Subject<string>();
  public language$ = this.language.asObservable();
  public currentLanguage = 'pt-br';

  setLanguage(languageTranslate: string) {
    this.currentLanguage = languageTranslate;
    this.language.next(languageTranslate);
  }
}
