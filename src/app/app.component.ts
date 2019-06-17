import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAuthenticated: boolean;
  public title = 'uRead';

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.userService.verifyDataStorage();
    this.verifyUserAuthenticated();
  }

  private verifyUserAuthenticated(): void {
    this.userService.userIsAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
