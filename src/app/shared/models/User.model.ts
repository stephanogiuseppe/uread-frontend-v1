import { Column } from './Column.model';

interface Login {
  email: string;
  password: string;
}

export class User implements Login {
  name: string;
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  createdAt: Date;
  favoritePosts?: Array<string>;
  subscriptions?: Array<Column>;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
