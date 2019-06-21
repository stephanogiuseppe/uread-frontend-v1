import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Subject, Subscription } from 'rxjs';

import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post.model';
import { ColumnsService } from 'src/app/shared/services/columns.service';
import { Column } from 'src/app/shared/models/Column.model';
import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  public isShowPosts: boolean;
  public searchForm: FormGroup;
  public columns: Array<Column>;
  public post: Post;
  public posts: Array<Post>;
  public toggleOptions: Array<string> = ['posts', 'columns', 'subscriptions'];
  public isPostOpen: boolean;
  public closeSubject: Subject<boolean> = new Subject<boolean>();
  public subscriptions: Array<any>;
  public uerId: string;

  constructor(
    private translate: TranslateService,
    private postsService: PostsService,
    private columnsService: ColumnsService,
    private router: Router,
    private changeTranslateService: ChangeTranslateService
  ) {
    this.uerId = JSON.parse(localStorage.getItem('usrdt')).user._id;

    translate.setDefaultLang('pt-br');
    translate.use(this.changeTranslateService.currentLanguage);

    this.translateServiceObservable = this.changeTranslateService.language$.subscribe(
      (language: string) => {
        translate.use(language);
      }
    );
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchFormControl: new FormControl(null)
    });
    this.getPosts();
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
  }

  public onSubmit(): void {
    this.postsService
      .getPostsByName(this.searchForm.controls.searchFormControl.value)
      .subscribe(posts => (this.posts = posts));
  }

  public async showPostDetails(post: Post): Promise<void> {
    await this.getPostById(post['_id']);
    this.isPostOpen = true;
  }

  public changeTypeSearch(searchValue: string): void {
    const pascalCase =
      searchValue.charAt(0).toUpperCase() + searchValue.substr(1);
    this[`get${pascalCase}`]();
  }

  public async getPostById(id: string): Promise<void> {
    await this.postsService
      .getPostById(id)
      .subscribe(post => (this.post = post));
  }

  public getPosts(): void {
    this.isShowPosts = true;
    this.postsService.getPosts().subscribe(posts => (this.posts = posts));
  }

  public getColumns(): void {
    this.isShowPosts = false;
    this.columnsService.getColumns().subscribe(columns => {
      this.columns = columns;
      columns.forEach(column => {
        this.subscriptions = column.subscriptions.filter(
          subsc => subsc._id === this.uerId
        );
      });
    });
  }

  public getSubscriptions(): void {
    this.isShowPosts = false;
    this.columnsService.getColumnBySubscriptions().subscribe(columns => {
      this.columns = columns;
    });
  }

  public emitEventCloseToModalRight(): void {
    this.closeSubject.next(true);
  }

  public onChangeModalState(option): void {
    this[option] = !this[option];
  }

  public favoriteColumn(favorite: boolean, columnId: string): void {
    if (favorite) {
      this.columnsService.subscribeColumn(columnId).subscribe(subsRes => {
        this.getColumns();
      });
      return;
    }
    this.columnsService.unsubscribeColumn(columnId).subscribe(subsRes => {
      this.getColumns();
    });
  }

  public verifyIsFavorite(column): number {
    return column.subscriptions.filter(subscription =>
      this.subscriptions.includes(subscription)
    ).length;
  }
}
