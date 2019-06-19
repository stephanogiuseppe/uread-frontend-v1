import { Column } from './Column.model';

interface Login {
  email: string;
  password: string;
}

export class User implements Login {
  _id?: string;
  email: string;
  password: string;
  name?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt?: Date;
  favoritePosts?: Array<string>;
  subscriptions?: Array<Column>;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
