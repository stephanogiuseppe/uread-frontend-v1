import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';

import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post.model';
import { ColumnsService } from 'src/app/shared/services/columns.service';
import { Column } from 'src/app/shared/models/Column.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isShowPosts: boolean;
  public searchForm: FormGroup;
  public columns: Array<Column>;
  public post: Post;
  public posts: Array<Post>;
  public toggleOptions: Array<string> = ['posts', 'columns', 'subscriptions'];
  public isPostOpen: boolean;
  public closeSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private translate: TranslateService,
    private postsService: PostsService,
    private columnsService: ColumnsService,
    private router: Router
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchFormControl: new FormControl(null)
    });
    this.getPosts();
  }

  public onSubmit(): void {
    this.postsService
      .getPostsByName(this.searchForm.controls.searchFormControl.value)
      .subscribe(posts => (this.posts = posts));
  }

  public async showPostDetails(post: Post): Promise<void> {
    console.log(post);
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
    this.columnsService
      .getColumns()
      .subscribe(columns => (this.columns = columns));
  }

  public getSubscriptions(): void {
    this.isShowPosts = false;
    this.columnsService
      .getColumnBySubscriptions()
      .subscribe(columns => (this.columns = columns));
  }

  public emitEventCloseToModalRight(): void {
    this.closeSubject.next(true);
  }

  public onChangeModalState(option): void {
    this[option] = !this[option];
  }
}
