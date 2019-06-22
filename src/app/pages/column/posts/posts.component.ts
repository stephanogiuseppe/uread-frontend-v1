import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';
import { Post } from 'src/app/shared/models/Post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsFormComponent } from './post-form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  private getPostsObservable: Subscription;
  public posts: Array<Post>;

  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService,
    private postsService: PostsService,
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
    this.getPosts();
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
    this.getPostsObservable.unsubscribe();
  }

  public getPosts(): void {
    this.getPostsObservable = this.postsService
      .getPosts()
      .subscribe(postsRes => {
        this.posts = postsRes;
      });
  }

  public openAddPostDialog(): void {
    const dialogRef = this.dialog.open(PostsFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
