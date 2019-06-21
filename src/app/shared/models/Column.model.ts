import { User } from './User.model';

export class Column {
  title: string;
  description: string;
  user: User;
  writers: Array<User>;
  subscriptions: Array<User>;
}
