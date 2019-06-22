import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: 'post-form.component.html'
})
export class PostsFormComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  private createPostObservable: Subscription;
  public postForm: FormGroup;

  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService,
    private postsService: PostsService
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
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
    this.createPostObservable.unsubscribe();
  }

  public createPost(): void {
    const post = { ...this.postForm.value };
    this.createPostObservable = this.postsService
      .createPost(post)
      .subscribe(postRes => {
        console.log(postRes);
      });
  }
}
